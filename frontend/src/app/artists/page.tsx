import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Artists() {
  return (
    <>
      <Navbar />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>The Master Craftspeople</p>
                <h1>Meet the Artists</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2>Coming Soon</h2>
              <p className="mt-4">This section will display details of our artists, their incredible skills, and what motivates them to keep these traditions alive.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
