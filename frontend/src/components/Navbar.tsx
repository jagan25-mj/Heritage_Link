"use client";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              <div className="site-logo">
                <a href="/">
                  <img 
                    src="/assets/img/logo.png" 
                    alt="Heritage Link" 
                    style={{ height: '110px', objectFit: 'contain' }}
                  />
                </a>
              </div>
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
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
