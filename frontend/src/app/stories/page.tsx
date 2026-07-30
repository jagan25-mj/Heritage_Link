import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Stories() {
  return (
    <>
      <Navbar />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>The Heart Behind The Art</p>
                <h1>Stories & Process</h1>
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
              <p className="mt-4">This section will feature the rich backstories of our products and the detailed processes behind the art making.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
