import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'placeholder_anon_key';
const supabase = createClient(supabaseUrl, supabaseKey);

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'placeholder_key_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'placeholder_key_secret',
});

export async function POST(req: Request) {
  try {
    const { items, totalAmount, shippingDetails } = await req.json();
    
    // Create Razorpay Order
    const options = {
      amount: totalAmount * 100, // paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`
    };
    
    const razorpayOrder = await razorpay.orders.create(options);
    
    // Optional: Save to Supabase
    // await supabase.from('orders').insert([{ ... }])
    
    return NextResponse.json({
      success: true,
      order_id: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency
    });
  } catch (error: any) {
    console.error('Create Order Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
