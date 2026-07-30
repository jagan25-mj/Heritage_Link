
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Search Overlay */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn"><i className="fas fa-window-close"></i></span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search Crafts:</h3>
                  <input type="text" placeholder="Search by craft, artisan, or region..." />
                  <button type="submit">Search <i className="fas fa-search"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="homepage-slider">
        <div className="single-homepage-slider homepage-bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Authentic Handcrafted Treasures</p>
                    <h1>Discover India's Living Heritage</h1>
                    <div className="hero-btns">
                      <a href="/shop" className="boxed-btn">Explore Crafts</a>
                      <a href="#" className="bordered-btn">Meet Artisans</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-homepage-slider homepage-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Intricate Weaving Mastery</p>
                    <h1>The Magic of Pochampally Ikat</h1>
                    <div className="hero-btns">
                      <a href="/shop" className="boxed-btn">View Textiles</a>
                      <a href="#" className="bordered-btn">Meet Artisans</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="list-section pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon"><i className="fas fa-certificate"></i></div>
                <div className="content">
                  <h3>Verified Artisans</h3>
                  <p>500+ master craftspeople</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="list-box d-flex align-items-center">
                <div className="list-icon"><i className="fas fa-award"></i></div>
                <div className="content">
                  <h3>GI Certified Crafts</h3>
                  <p>Authenticity guaranteed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="list-box d-flex justify-content-start align-items-center">
                <div className="list-icon"><i className="fas fa-truck"></i></div>
                <div className="content">
                  <h3>Nationwide Delivery</h3>
                  <p>Eco-friendly packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">	
                <h3><span className="orange-text">Featured</span> Handcrafted Collections</h3>
                <p>Each piece carries the soul of its maker.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/shop"><img src="/assets/img/heritage/kondapalli-toys.png" alt="" /></a>
                </div>
                <h3>Kondapalli Toys</h3>
                <p className="craft-meta"><i className="fas fa-user"></i> Rama Krishna &bull; Kondapalli Village</p>
                <span className="gi-tag-badge">GI Certified</span>
                <p className="product-price"><span>Handcrafted</span> ₹2,500 </p>
                <a href="/shop" className="cart-btn"><i className="fas fa-shopping-cart"></i> Shop Now</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/shop"><img src="/assets/img/heritage/blue-pottery.png" alt="" /></a>
                </div>
                <h3>Blue Pottery Vase</h3>
                <p className="craft-meta"><i className="fas fa-user"></i> Jaipur Artisan Cluster</p>
                <span className="gi-tag-badge">Authentic</span>
                <p className="product-price"><span>Handcrafted</span> ₹1,800 </p>
                <a href="/shop" className="cart-btn"><i className="fas fa-shopping-cart"></i> Shop Now</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <a href="/shop"><img src="/assets/img/heritage/kalamkari.png" alt="" /></a>
                </div>
                <h3>Kalamkari Fabric</h3>
                <p className="craft-meta"><i className="fas fa-user"></i> Pedana Weavers</p>
                <span className="gi-tag-badge">GI Certified</span>
                <p className="product-price"><span>Handcrafted</span> ₹3,500 </p>
                <a href="/shop" className="cart-btn"><i className="fas fa-shopping-cart"></i> Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
