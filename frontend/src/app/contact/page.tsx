"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Get in Touch</p>
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-from-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="form-title">
                <h2>Have any questions?</h2>
                <p>We are here to support you and our artists. Let us know how we can help.</p>
              </div>
              <div id="form_status"></div>
              <div className="contact-form">
                <form id="fruitkha-contact" onSubmit={(e) => e.preventDefault()}>
                  <p>
                    <input type="text" placeholder="Name" name="name" id="name" />
                    <input type="email" placeholder="Email" name="email" id="email" />
                  </p>
                  <p>
                    <input type="tel" placeholder="Phone" name="phone" id="phone" />
                    <input type="text" placeholder="Subject" name="subject" id="subject" />
                  </p>
                  <p><textarea name="message" id="message" cols={30} rows={10} placeholder="Message"></textarea></p>
                  <p><input type="submit" value="Submit" style={{background: '#F28123', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '50px', fontWeight: 700}} /></p>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-form-wrap">
                <div className="contact-form-box">
                  <h4><i className="fas fa-map"></i> Shop Address</h4>
                  <p style={{ color: '#fff' }}>Heritage Link HQ <br/> Hyderabad, Telangana <br/> India</p>
                </div>
                <div className="contact-form-box">
                  <h4><i className="far fa-clock"></i> Shop Hours</h4>
                  <p style={{ color: '#fff' }}>MON - FRIDAY: 8 to 9 PM <br/> SAT - SUN: 10 to 8 PM </p>
                </div>
                <div className="contact-form-box">
                  <h4><i className="fas fa-address-book"></i> Contact</h4>
                  <p style={{ color: '#fff' }}>Phone: +91 99999 99999 <br/> Email: support@heritagelink.com</p>
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
