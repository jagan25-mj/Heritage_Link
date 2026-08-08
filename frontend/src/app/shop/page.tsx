"use client";
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart, Product } from "@/context/CartContext";

function ProductCard({ product, addToCart }: { product: Product, addToCart: (p: Product) => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = product.images && product.images.length > 1;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.images) return;
    setCurrentImageIndex((prev) => (prev === 0 ? product.images!.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!product.images) return;
    setCurrentImageIndex((prev) => (prev === product.images!.length - 1 ? 0 : prev + 1));
  };

  const currentImage = hasMultipleImages ? product.images![currentImageIndex] : product.image;

  return (
    <div className="col-lg-4 col-md-6 text-center">
      <div className="single-product-item">
        <div className="product-image" style={{ position: 'relative' }}>
          <img src={currentImage} alt={product.name} style={{ width: '100%', height: '250px', objectFit: 'contain' }} />
          {hasMultipleImages && (
            <>
              <button 
                onClick={handlePrevImage} 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}
              >
                &lt;
              </button>
              <button 
                onClick={handleNextImage} 
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}
              >
                &gt;
              </button>
              <div style={{ position: 'absolute', bottom: '10px', width: '100%', display: 'flex', justifyContent: 'center', gap: '5px' }}>
                {product.images!.map((_, idx) => (
                  <div key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', background: idx === currentImageIndex ? '#F28123' : '#ccc' }} />
                ))}
              </div>
            </>
          )}
        </div>
        <h3>{product.name}</h3>
        <p className="craft-meta"><i className="fas fa-tag"></i> {product.category}</p>
        <p className="product-price"><span>Handcrafted</span> ₹{product.price} </p>
        <button onClick={() => addToCart(product)} className="cart-btn" style={{border: 'none', cursor: 'pointer'}}>
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}

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
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
