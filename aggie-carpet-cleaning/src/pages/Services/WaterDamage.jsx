import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './WaterDamage.css';

const WaterDamage = () => {
  return (
    <div className="wd-page">
      <Navbar />

      {/* Hero Section */}
      <section className="wd-hero">
        <div className="wd-hero-inner">
          <h1>CALL US AFTER A FLOOD</h1>
          <h2>We offer water damage restoration services around Las Cruces and Deming, NM</h2>
          <p>
            Maybe a pipe burst in your bathroom. Or maybe your basement flooded during a major storm. Either
            way, Aggie Carpet Cleaning is here for you. We provide thorough water damage restoration services
            in the Las Cruces & Deming, NM areas. You can count on us to show up with the equipment needed
            to extract water from your home and start the cleanup process.
          </p>
          <p className="wd-cta-line">
            Call 575-649-3197 now for water extraction and restoration services. We can provide you with an
            estimate over the phone.
          </p>
          <Link to="/contact" className="wd-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Ready to Work Section */}
      <section className="wd-ready">
        <div className="wd-ready-inner">
          <div className="wd-ready-text">
            <h2>WE'RE READY TO GET TO WORK</h2>
            <p>
              You don't have time to wait around for water extraction and restoration services after a flood,
              so hire a company that will act fast.
            </p>
            <p>Aggie Carpet Cleaning will...</p>

            <div className="wd-checklist">
              <div className="wd-check-item">
                <span className="wd-checkmark">✓</span>
                <span>Extract standing water</span>
              </div>
              <div className="wd-check-item">
                <span className="wd-checkmark">✓</span>
                <span>Dry out flooring and baseboards</span>
              </div>
              <div className="wd-check-item">
                <span className="wd-checkmark">✓</span>
                <span>Install dehumidifiers and air scrubbers</span>
              </div>
              <div className="wd-check-item">
                <span className="wd-checkmark">✓</span>
                <span>Mitigate signs of mold or mildew</span>
              </div>
            </div>

            <p className="wd-outro">
              Get your home back in order – reach out now for water damage restoration services in Las
              Cruces & Deming, NM.
            </p>
          </div>

          <div className="wd-ready-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
              alt="Water damage on ceiling and walls"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaterDamage;