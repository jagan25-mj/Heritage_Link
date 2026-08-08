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
            <div className="col-lg-10 offset-lg-1">
              <h2 className="text-center mb-4">The Legacy of Kondapalli Toys</h2>
              <div className="text-center mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Kondapalli_toys_at_a_house_in_Vijayawada.jpg" alt="Kondapalli Toys in a house" style={{ maxWidth: '100%', borderRadius: '8px' }} />
              </div>
              <p>
                Nestled in the lush hills of Andhra Pradesh lies the village of <strong>Kondapalli</strong>, a place synonymous with vibrant, hand-carved wooden toys known as <em>Kondapalli Bommalu</em>. For over 400 years, the artisans of this village—known as the Aryakhshatriyas—have passed down the delicate art of toy-making from generation to generation.
              </p>
              <p>
                The process begins with the sourcing of <em>Tella Poniki</em> wood, a soft and lightweight wood found in the nearby Kondapalli forests. The artisans skillfully carve this wood into intricate shapes, depicting everything from mythological figures and rural life scenes to the beloved Dasavatarams and playful animal sets.
              </p>
              <div className="text-center mb-4 mt-4">
                <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Wood crafting" style={{ maxWidth: '100%', borderRadius: '8px' }} />
              </div>
              <p>
                What makes Kondapalli toys truly unique is the meticulous detailing and the vibrant colors. Historically, artisans used natural dyes extracted from plants and minerals. A paste of tamarind seed powder and sawdust is used to join pieces together and smoothen the edges. Finally, each toy is brought to life with bright, expressive strokes of paint.
              </p>
              <p>
                Today, these toys are not just playthings; they are cultural artifacts that capture the essence of Indian folklore and rural life. By bringing these authentic Kondapalli toys to you, we hope to preserve this beautiful heritage and support the master craftspeople who keep the tradition alive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
