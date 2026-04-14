import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './LaminateFlooringInstallation.css';

const LaminateFlooringInstallation = () => {
  return (
    <div className="lfi-page">
      <Navbar />

      <section className="lfi-hero">
        <div className="lfi-hero-inner">
          <h1>LAMINATE FLOORING INSTALLATION</h1>
          <h2>Modern, durable flooring for busy homes</h2>
          <p>
            Looking for a clean new floor without the high cost of hardwood? Aggie Carpet Cleaning offers
            laminate flooring installation services in Las Cruces and El Paso with careful prep and
            professional finishing.
          </p>
          <p>
            We help you get a smooth, consistent look that holds up well in everyday high-traffic areas.
          </p>
          <Link to="/contact" className="lfi-connect-btn">Request Service</Link>
        </div>
      </section>

      <section className="lfi-details">
        <div className="lfi-details-inner">
          <div className="lfi-details-text">
            <h2>WHAT'S INCLUDED</h2>
            <div className="lfi-list">
              <div className="lfi-item"><span className="lfi-check">&#10003;</span><span>Subfloor prep and layout planning</span></div>
              <div className="lfi-item"><span className="lfi-check">&#10003;</span><span>Professional plank installation</span></div>
              <div className="lfi-item"><span className="lfi-check">&#10003;</span><span>Trim and transition finishing</span></div>
              <div className="lfi-item"><span className="lfi-check">&#10003;</span><span>Post-install cleanup</span></div>
            </div>
          </div>
          <div className="lfi-image">
            <img src={require('../gray-sectional.jpg')} alt="Laminate flooring installation" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaminateFlooringInstallation;

