import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './TileInstallRepair.css';

const TileInstallRepair = () => {
  return (
    <div className="tir-page">
      <Navbar />

      <section className="tir-hero">
        <div className="tir-hero-inner">
          <h1>TILE INSTALLATION & TILE REPAIR</h1>
          <h2>Clean, durable tile work for kitchens, baths, and floors</h2>
          <p>
            Need tile work done right? Aggie Carpet Cleaning now provides tile installation and tile repair
            in Las Cruces and El Paso. We help with damaged tile, loose pieces, and fresh installs that
            improve the look and value of your space.
          </p>
          <Link to="/contact" className="tir-connect-btn">Request Service</Link>
        </div>
      </section>

      <section className="tir-details">
        <div className="tir-details-inner">
          <div className="tir-details-text">
            <h2>SERVICE OPTIONS</h2>
            <div className="tir-list">
              <div className="tir-item"><span className="tir-check">&#10003;</span><span>Tile replacement for cracked or chipped tiles</span></div>
              <div className="tir-item"><span className="tir-check">&#10003;</span><span>New tile installation</span></div>
              <div className="tir-item"><span className="tir-check">&#10003;</span><span>Grout touch-up and repair</span></div>
              <div className="tir-item"><span className="tir-check">&#10003;</span><span>Leveling and finish cleanup</span></div>
            </div>
          </div>
          <div className="tir-image">
            <img src={require('../tile-floor-bathroom.jpg')} alt="Tile service" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TileInstallRepair;

