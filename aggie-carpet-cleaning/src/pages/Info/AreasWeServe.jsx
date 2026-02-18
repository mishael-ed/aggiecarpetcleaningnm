import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './AreasWeServe.css';

const AreasWeServe = () => {
  const cities = [
    'SILVER CITY, NM',
    'LAS CRUCES, NM',
    'DEMING, NM',
    'MESILLA, NM',
    'LORDSBURG, NM',
    'COLUMBUS, NM',
    'DONA ANA, NM',
    'VADO, NM',
    'RADIUM SPRINGS, NM',
    'EL PASO, TX',
    'SUNLAND PARK, NM',
  ];

  return (
    <div className="aws-page">
      <Navbar />

      {/* Hero Section */}
      <section className="aws-hero">
        <div className="aws-hero-inner">
          <h1>AREAS WE SERVE</h1>
          <h2>View our service area</h2>
          <Link to="/contact" className="aws-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Cities + Map Section */}
      <section className="aws-grid-section">
        <div className="aws-grid-section-inner">

          {/* City Cards Grid */}
          <div className="aws-cities-grid">
            {cities.map((city, index) => (
              <div className="aws-city-card" key={index}>
                <span>{city}</span>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="aws-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432107.8187431396!2d-107.3488!3d32.3199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e05c3d6e000001%3A0x1c8e4e7f1c1b3e8!2sLas%20Cruces%2C%20NM!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Aggie Carpet Cleaning Service Area"
            ></iframe>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasWeServe;