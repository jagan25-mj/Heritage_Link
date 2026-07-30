"use client";
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart, Product } from "@/context/CartContext";

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const { addToCart } = useCart();

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);

  useEffect(() => {
    // Fetch products from backend
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Handcrafted with Love</p>
                <h1>Marketplace</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                  {categories.map(cat => (
                    <li 
                      key={cat} 
                      className={activeFilter === cat ? 'active' : ''} 
                      onClick={() => setActiveFilter(cat)}
                      style={{cursor: 'pointer'}}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px 0' }}>
            {filteredProducts.map(product => (
              <div key={product.id} className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <img src={`/assets/img/heritage/${product.image}`} alt={product.name} />
                  </div>
                  <h3>{product.name}</h3>
                  <p className="craft-meta"><i className="fas fa-tag"></i> {product.category}</p>
                  <p className="product-price"><span>Handcrafted</span> ₹{product.price} </p>
                  <button onClick={() => addToCart(product)} className="cart-btn" style={{border: 'none', cursor: 'pointer'}}>
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
