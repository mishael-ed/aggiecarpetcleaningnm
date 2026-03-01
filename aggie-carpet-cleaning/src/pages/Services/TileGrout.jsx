import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './TileGrout.css';

const TileGrout = () => {
  return (
    <div className="tg-page">
      <Navbar />

      {/* Hero Section */}
      <section className="tg-hero">
        <div className="tg-hero-inner">
          <h1>MAKE YOUR TILE SPARKLE AND SHINE</h1>
          <h2>Get tile floor cleaning services in Las Cruces and El Paso and El Paso, TX</h2>
          <p>
            Tile and grout are naturally porous, so no matter how often you clean, it's only a matter of
            time before dirt gets trapped in the crevices. Luckily, Aggie Carpet Cleaning makes it easy to
            bring back that new tile shine. We offer tile floor and grout cleaning services in Las Cruces and El Paso &
            El Paso, TX. Using manual scrubbers and cleaners, we'll extract the dirt and grime from your tile
            floors so that they shine like new once again.
          </p>
          <p className="tg-cta-line">
            Connect with us today for professional tile floor cleaning services.
          </p>
          <Link to="/contact" className="tg-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Take Cleaning a Step Further Section */}
      <section className="tg-further">
        <div className="tg-further-inner">
          <div className="tg-further-text">
            <h2>TAKE CLEANING A STEP FURTHER</h2>
            <p>When your grout lines start to look dull and grimy, make a call to Aggie Carpet Cleaning.</p>
            <p>Our thorough tile floor and grout cleaning services will...</p>

            <div className="tg-checklist">
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Remove mold and bacteria</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Restore color and shine</span>
              </div>
              <div className="tg-check-item">
                <span className="tg-checkmark">✓</span>
                <span>Reverse signs of aging</span>
              </div>
            </div>

            <p className="tg-outro">
              Extend the life of your tile floors with regular tile floor cleaning services – reach out now
              to get started.
            </p>
          </div>

          <div className="tg-further-image">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"
              alt="Tile and grout cleaning service"
              alt="Professional tile and grout cleaning"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TileGrout;