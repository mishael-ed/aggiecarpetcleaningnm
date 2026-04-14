import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './CarpetInstallRepair.css';

const CarpetInstallRepair = () => {
  return (
    <div className="cir-page">
      <Navbar />

      <section className="cir-hero">
        <div className="cir-hero-inner">
          <h1>CARPET INSTALLATION & CARPET REPAIR</h1>
          <h2>Upgrade worn floors in Las Cruces and El Paso</h2>
          <p>
            Aggie Carpet Cleaning now offers carpet installation and carpet repair services for homes and
            rentals across Las Cruces, NM and El Paso, TX. Whether you are replacing old carpet or fixing
            problem areas, our team can help you restore comfort and appearance quickly.
          </p>
          <p>
            From seam fixes and stretching to full-room installation, we focus on clean workmanship and
            long-lasting results.
          </p>
          <Link to="/contact" className="cir-connect-btn">Request Service</Link>
        </div>
      </section>

      <section className="cir-details">
        <div className="cir-details-inner">
          <div className="cir-details-text">
            <h2>WHAT WE HANDLE</h2>
            <div className="cir-list">
              <div className="cir-item"><span className="cir-check">&#10003;</span><span>New carpet installation</span></div>
              <div className="cir-item"><span className="cir-check">&#10003;</span><span>Carpet patching and seam repair</span></div>
              <div className="cir-item"><span className="cir-check">&#10003;</span><span>Carpet re-stretching for ripples and buckles</span></div>
              <div className="cir-item"><span className="cir-check">&#10003;</span><span>Transition and edge finishing</span></div>
            </div>
          </div>
          <div className="cir-image">
            <img src={require('../carpet-equipment-bedroom.jpg')} alt="Carpet service" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarpetInstallRepair;

