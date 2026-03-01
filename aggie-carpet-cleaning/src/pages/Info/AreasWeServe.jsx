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

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasWeServe;