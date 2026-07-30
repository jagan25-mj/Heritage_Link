"use client";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth < 992);
      handleResize(); // initial check
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap" style={{ position: 'relative' }}>
              <div className="site-logo">
                <a href="/">
                  <img 
                    src="/assets/img/logo.png" 
                    alt="Heritage Link" 
                    style={{ height: isMobile ? '60px' : '110px', objectFit: 'contain', transition: 'height 0.3s' }}
                  />
                </a>
              </div>
              
              {isMobile ? (
                <>
                  <div style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '25px' }}>
                    <a className="shopping-cart" href="/cart" style={{ position: 'relative', fontSize: '22px', color: '#fff' }}>
                      <i className="fas fa-shopping-cart"></i>
                      {cartItemCount > 0 && (
                        <span style={{ position: 'absolute', top: '-8px', right: '-12px', background: '#F28123', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '11px', fontWeight: 'bold' }}>
                          {cartItemCount}
                        </span>
                      )}
                    </a>
                    <button 
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', padding: 0 }}
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                  
                  {isMobileMenuOpen && (
                    <div style={{ position: 'absolute', top: '100%', left: '-15px', right: '-15px', background: '#051922', padding: '0 20px', zIndex: 999, textAlign: 'left', borderTop: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 15px rgba(0,0,0,0.5)' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}><a href="/" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '15px 0', fontSize: '16px', fontWeight: 600 }}>Home</a></li>
                        <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}><a href="/shop" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '15px 0', fontSize: '16px', fontWeight: 600 }}>Marketplace</a></li>
                        <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}><a href="/stories" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '15px 0', fontSize: '16px', fontWeight: 600 }}>Stories</a></li>
                        <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}><a href="/artists" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '15px 0', fontSize: '16px', fontWeight: 600 }}>Artists</a></li>
                        <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '15px 0', fontSize: '16px', fontWeight: 600 }}>Contact</a></li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <nav className="main-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Marketplace</a></li>
                    <li><a href="/stories">Stories</a></li>
                    <li><a href="/artists">Artists</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li>
                      <div className="header-icons">
                        <a className="shopping-cart" href="/cart" style={{ position: 'relative', fontSize: '20px' }}>
                          <i className="fas fa-shopping-cart"></i>
                          {cartItemCount > 0 && (
                            <span style={{
                              position: 'absolute',
                              top: '-5px',
                              right: '-10px',
                              background: '#F28123',
                              color: 'white',
                              borderRadius: '50%',
                              padding: '2px 5px',
                              fontSize: '11px',
                              fontWeight: 'bold'
                            }}>
                              {cartItemCount}
                            </span>
                          )}
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
