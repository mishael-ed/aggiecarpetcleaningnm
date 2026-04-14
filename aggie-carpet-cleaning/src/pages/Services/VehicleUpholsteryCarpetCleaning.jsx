import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './VehicleUpholsteryCarpetCleaning.css';

const VehicleUpholsteryCarpetCleaning = () => {
  return (
    <div className="vucc-page">
      <Navbar />

      <section className="vucc-hero">
        <div className="vucc-hero-inner">
          <h1>VEHICLE UPHOLSTERY AND CARPET CLEANING</h1>
          <h2>Car upholstery and carpet cleaning that refreshes your ride</h2>
          <p>
            Aggie Carpet Cleaning now offers vehicle upholstery and carpet cleaning in Las Cruces and El Paso.
            If your seats, mats, or interior carpet have stains, odors, or built-up dirt, we provide deep
            cleaning that helps restore a cleaner, fresher cabin.
          </p>
          <p>
            Our process targets everyday mess, pet-related odors, and high-traffic wear so your vehicle feels
            cleaner and more comfortable again.
          </p>
          <Link to="/contact" className="vucc-connect-btn">Request Service</Link>
        </div>
      </section>

      <section className="vucc-details">
        <div className="vucc-details-inner">
          <div className="vucc-details-text">
            <h2>WHAT'S INCLUDED</h2>
            <div className="vucc-list">
              <div className="vucc-item"><span className="vucc-check">&#10003;</span><span>Vehicle carpet deep cleaning</span></div>
              <div className="vucc-item"><span className="vucc-check">&#10003;</span><span>Seat and upholstery stain treatment</span></div>
              <div className="vucc-item"><span className="vucc-check">&#10003;</span><span>Odor reduction treatment</span></div>
              <div className="vucc-item"><span className="vucc-check">&#10003;</span><span>Interior fabric refresh and cleanup</span></div>
            </div>
          </div>
          <div className="vucc-image">
            <img src={require('../gray-sectional.jpg')} alt="Vehicle upholstery and carpet cleaning service" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleUpholsteryCarpetCleaning;

