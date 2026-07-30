"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalAmount } = useCart();

  return (
    <>
      <Navbar />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Handcrafted with Love</p>
                <h1>Your Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <div style={{ overflowX: 'auto' }}>
                  <table className="cart-table" style={{ minWidth: '600px' }}>
                    <thead className="cart-table-head">
                      <tr className="table-head-row">
                        <th className="product-remove"></th>
                        <th className="product-image">Product Image</th>
                        <th className="product-name">Craft Name</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr className="table-body-row" key={item.id}>
                          <td className="product-remove">
                            <button onClick={() => removeFromCart(item.id)} style={{border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '20px', padding: '10px'}}>
                              <i className="far fa-window-close"></i>
                            </button>
                          </td>
                          <td className="product-image"><img src={`/assets/img/heritage/${item.image}`} alt={item.name} style={{ width: '80px', height: 'auto' }} /></td>
                          <td className="product-name">{item.name}</td>
                          <td className="product-price">₹{item.price}</td>
                          <td className="product-quantity">
                            <input 
                              type="number" 
                              value={item.quantity} 
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)} 
                              min="1"
                              style={{ width: '60px', padding: '5px', textAlign: 'center' }}
                            />
                          </td>
                          <td className="product-total">₹{item.price * item.quantity}</td>
                        </tr>
                      ))}
                      {cart.length === 0 && (
                        <tr className="table-body-row">
                          <td colSpan={6} style={{padding: '20px'}}>Your cart is empty.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td><strong>Subtotal: </strong></td>
                      <td>₹{totalAmount}</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Shipping: </strong></td>
                      <td>₹150</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Total: </strong></td>
                      <td>₹{totalAmount + (cart.length > 0 ? 150 : 0)}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  <a href="/checkout" className="boxed-btn black">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
