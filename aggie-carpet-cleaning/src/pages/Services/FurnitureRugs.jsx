import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './FurnitureRugs.css';

const FurnitureRugs = () => {
  return (
    <div className="fr-page">
      <Navbar />

      {/* Hero Section */}
      <section className="fr-hero">
        <div className="fr-hero-inner">
          <h1>DON'T THROW OUT YOUR FAVORITE LOUNGER</h1>
          <h2>Turn to us for upholstery cleaning services in Las Cruces and El Paso and El Paso, TX</h2>
          <p>
            After years of lounging on your favorite sofa, the fabric might start to look the worse for wear.
            But that doesn't mean you have to throw it out. Rely on Aggie Carpet Cleaning for upholstery
            cleaning services in Las Cruces and El Paso & El Paso, TX. We'll remove stains and discoloring from your
            fabrics and furniture to make them look fresh and new again.
          </p>
          <p className="fr-cta-line">
            Speak with someone from our team today to discuss our furniture or rug cleaning services.
          </p>
          <Link to="/contact" className="fr-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Dark Stains Section */}
      <section className="fr-stains">
        <div className="fr-stains-inner">
          <div className="fr-stains-text">
            <h2>DARK STAINS ARE NO MATCH FOR US</h2>
            <p>
              Aggie Carpet Cleaning has the experience and equipment needed to remove old stains from your
              fabrics and floors.
            </p>
            <p>Our safe and effective upholstery cleaning services cover...</p>

            <div className="fr-checklist">
              <div className="fr-check-item">
                <span className="fr-checkmark">✓</span>
                <span>Sofas</span>
              </div>
              <div className="fr-check-item">
                <span className="fr-checkmark">✓</span>
                <span>Armchairs</span>
              </div>
              <div className="fr-check-item">
                <span className="fr-checkmark">✓</span>
                <span>Area rugs</span>
              </div>
              <div className="fr-check-item">
                <span className="fr-checkmark">✓</span>
                <span>Curtains</span>
              </div>
              <div className="fr-check-item">
                <span className="fr-checkmark">✓</span>
                <span>Mattresses</span>
              </div>
              <div className="fr-check-item">
                <span className="fr-checkmark">✓</span>
                <span>Cushions/pillows</span>
              </div>
            </div>

            <p className="fr-disclaimer">
              Schedule furniture or rug cleaning services with us today to get your upholstery back to
              normal. Please note that we do not clean leather furniture or oriental rugs.
            </p>
          </div>

          <div className="fr-stains-image">
            {/* Image updated */}
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
              alt="Furniture and upholstery cleaning"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FurnitureRugs;