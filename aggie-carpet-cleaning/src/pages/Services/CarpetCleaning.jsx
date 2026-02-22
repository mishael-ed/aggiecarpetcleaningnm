import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './CarpetCleaning.css';

const CarpetCleaning = () => {
  return (
    <div className="carpet-page">
      <Navbar />

      {/* Hero Section */}
      <section className="cp-hero">
        <div className="cp-hero-inner">
          <h1>REVITALIZE YOUR HOME'S INTERIOR TODAY</h1>
          <h2>Book Carpet Cleaning in Las Cruces and El Paso</h2>
          <p>
            Are you looking to refresh your home in Las Cruces and El Paso? Aggie Carpet Cleaning offers professional
            carpet cleaning services that will leave your carpets looking and feeling like new. As you walk
            through your freshly cleaned home, you'll notice the vibrant colors and the soft texture underfoot.
            We provide comprehensive carpet cleaning solutions tailored to your needs, whether it's a single
            room or your entire house. With competitive pricing and flexible scheduling, we ensure our services
            fit seamlessly into your life.
          </p>
          <p>
            In Las Cruces and El Paso, maintaining clean carpets is essential for a healthy home environment. Our team uses
            advanced cleaning techniques and eco-friendly products to remove dirt, allergens, and stains
            effectively. You can expect a thorough job that not only cleans but also extends the life of your
            carpets. Trust Aggie Carpet Cleaning to deliver exceptional results every time.
          </p>
          <p className="cp-cta-line">Contact us today to schedule your carpet cleaning appointment!</p>
          <Link to="/contact" className="cp-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="cp-expect">
        <div className="cp-expect-inner">
          <div className="cp-expect-text">
            <h2>WHAT TO EXPECT<br />WHEN YOU BOOK</h2>
            <p>
              When you choose Aggie Carpet Cleaning, you're opting for quality and reliability. Our process
              is designed to ensure your satisfaction from start to finish. We begin with a detailed inspection
              of your carpets to identify any specific areas of concern. Then, we tailor our cleaning approach
              to suit your needs, using state-of-the-art equipment:
            </p>

            <div className="cp-checklist">
              <div className="cp-check-item">
                <span className="cp-checkmark">✓</span>
                <span>Pre-treatment of stains with specialized solutions</span>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">✓</span>
                <span>Deep cleaning using hot water extraction</span>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">✓</span>
                <span>Seam-sealed with TPO membrane for lasting protection</span>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">✓</span>
                <span>Quick drying process completed in a few hours</span>
              </div>
              <div className="cp-check-item">
                <span className="cp-checkmark">✓</span>
                <span>Final inspection to ensure your satisfaction</span>
              </div>
            </div>

            <p className="cp-italic">
              Call today to schedule your carpet cleaning service or ask about our carpet repair and installation!
            </p>
          </div>

          <div className="cp-expect-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
              alt="Carpet cleaning in progress"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarpetCleaning;