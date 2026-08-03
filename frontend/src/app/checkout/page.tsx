"use client";
import { useState } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function Checkout() {
  const { cart, totalAmount, clearCart } = useCart();
  const [shippingDetails, setShippingDetails] = useState({
    name: '', email: '', address: '', city: '', state: '', pincode: '', phone: ''
  });
  const [statusMsg, setStatusMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({...shippingDetails, [e.target.name]: e.target.value});
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Cart is empty");

    setStatusMsg("Redirecting to secure payment page...");
    
    // Redirect to the provided Razorpay payment page
    window.location.href = "https://rzp.io/rzp/DGumc3Qb";
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <Navbar />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Handcrafted with Love</p>
                <h1>Check Out</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Shipping Address
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form onSubmit={handlePlaceOrder}>
                            <p><input type="text" name="name" placeholder="Full Name" required onChange={handleInputChange} /></p>
                            <p><input type="email" name="email" placeholder="Email" required onChange={handleInputChange} /></p>
                            <p><input type="text" name="address" placeholder="Address" required onChange={handleInputChange} /></p>
                            <p>
                              <input type="text" name="city" placeholder="City" style={{width: '48%', marginRight: '4%'}} required onChange={handleInputChange} />
                              <input type="text" name="state" placeholder="State" style={{width: '48%'}} required onChange={handleInputChange} />
                            </p>
                            <p>
                              <input type="text" name="pincode" placeholder="Pincode" style={{width: '48%', marginRight: '4%'}} required onChange={handleInputChange} />
                              <input type="tel" name="phone" placeholder="Phone" style={{width: '48%'}} required onChange={handleInputChange} />
                            </p>
                            <button type="submit" className="boxed-btn mt-4" style={{border:'none', cursor:'pointer'}}>Place Order & Pay</button>
                            {statusMsg && <p className="mt-3" style={{color: '#F28123'}}>{statusMsg}</p>}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    <tr>
                      <td>Product</td>
                      <td>Total</td>
                    </tr>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name} (x{item.quantity})</td>
                        <td>₹{item.price * item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="checkout-details">
                    <tr>
                      <td>Subtotal</td>
                      <td>₹{totalAmount}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>₹{cart.length > 0 ? 150 : 0}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>₹{totalAmount + (cart.length > 0 ? 150 : 0)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
