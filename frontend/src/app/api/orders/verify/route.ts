import { NextResponse } from 'next/server';
import crypto from 'crypto';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'placeholder_anon_key';
const supabase = createClient(supabaseUrl, supabaseKey);

const SHIPROCKET_EMAIL = process.env.SHIPROCKET_EMAIL || 'test@test.com';
const SHIPROCKET_PASSWORD = process.env.SHIPROCKET_PASSWORD || 'password';

async function getShiprocketToken() {
  try {
    const res = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', {
      email: SHIPROCKET_EMAIL,
      password: SHIPROCKET_PASSWORD,
    });
    return res.data.token;
  } catch (error: any) {
    console.error('Shiprocket Auth Error:', error.response?.data || error.message);
    throw new Error('Could not authenticate with Shiprocket');
  }
}

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, shippingDetails, items } = await req.json();

    // Verify Signature
    const secret = process.env.RAZORPAY_KEY_SECRET || 'placeholder_key_secret';
    const generated_signature = crypto.createHmac('sha256', secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ success: false, message: 'Invalid payment signature' }, { status: 400 });
    }

    // Integrate with Shiprocket
    try {
      const token = await getShiprocketToken();
      
      const shiprocketOrderPayload = {
        order_id: razorpay_order_id,
        order_date: new Date().toISOString(),
        pickup_location: "Primary",
        billing_customer_name: shippingDetails.name,
        billing_last_name: "",
        billing_address: shippingDetails.address,
        billing_city: shippingDetails.city || "Hyderabad",
        billing_pincode: shippingDetails.pincode || "500033",
        billing_state: shippingDetails.state || "Telangana",
        billing_country: "India",
        billing_email: shippingDetails.email,
        billing_phone: shippingDetails.phone,
        shipping_is_billing: true,
        order_items: items.map((item: any) => ({
          name: item.name,
          sku: `SKU-${item.id}`,
          units: item.quantity,
          selling_price: item.price
        })),
        payment_method: "Prepaid",
        sub_total: items.reduce((acc: number, i: any) => acc + (i.price * i.quantity), 0),
        length: 10,
        breadth: 15,
        height: 20,
        weight: 1
      };

      const orderRes = await axios.post('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', shiprocketOrderPayload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const shipmentId = orderRes.data.shipment_id;

      await axios.post('https://apiv2.shiprocket.in/v1/external/courier/assign/awb', {
        shipment_id: shipmentId
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      await axios.post('https://apiv2.shiprocket.in/v1/external/courier/generate/pickup', {
        shipment_id: [shipmentId]
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const labelRes = await axios.post('https://apiv2.shiprocket.in/v1/external/courier/generate/label', {
        shipment_id: [shipmentId]
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const labelUrl = labelRes.data.label_url;

      return NextResponse.json({ success: true, message: 'Payment verified and shipment created', labelUrl });
    } catch (shiprocketError: any) {
      console.error('Shiprocket Integration Error:', shiprocketError.response?.data || shiprocketError.message);
      return NextResponse.json({ success: true, message: 'Payment verified, but shipping failed to generate automatically.', error: shiprocketError.message });
    }
    
  } catch (error: any) {
    console.error('Verify Order Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
