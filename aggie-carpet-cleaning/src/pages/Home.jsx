import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Aggie Carpet Cleaning" />
          </Link>

          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span>Services ▼</span>
              <ul className="dropdown-menu">
                <li><Link to="/services/carpet-cleaning">Carpet Cleaning</Link></li>
                <li><Link to="/services/furniture-rugs">Furniture and Rugs</Link></li>
                <li><Link to="/services/tile-grout">Tile and Grout</Link></li>
                <li><Link to="/services/water-damage">Water Damage Restoration</Link></li>
                <li><Link to="/services/mold-remediation">Mold Remediation</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <span>Info ▼</span>
              <ul className="dropdown-menu">
                <li><Link to="/info/areas-we-serve">Areas We Serve</Link></li>
                <li><Link to="/info/reviews">Reviews</Link></li>
                <li><Link to="/info/faq">FAQ</Link></li>
                <li><Link to="/info/blog">Blog</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="cta-buttons">
            <a href="tel:las-cruces" className="cta-btn">Call Us In Las Cruces</a>
            <a href="tel:deming" className="cta-btn">Call Us In Deming</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              CHOOSE THE TRUSTED CARPET<br />
              CLEANING COMPANY IN LAS CRUCES<br />
              AND DEMING, NM
            </h1>
            <p className="hero-subtitle">Partner with the pros at Aggie Carpet Cleaning</p>
            <button className="hero-btn">Get In Touch</button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="service-cards">
          <div className="card">
            <h3>Carpet</h3>
            <Link to="/services/carpet-cleaning" className="card-arrow">
              <div className="arrow-circle">→</div>
            </Link>
          </div>

          <div className="card">
            <h3>Furniture and Rugs</h3>
            <Link to="/services/furniture-rugs" className="card-arrow">
              <div className="arrow-circle">→</div>
            </Link>
          </div>

          <div className="card">
            <h3>Tile and Grout</h3>
            <Link to="/services/tile-grout" className="card-arrow">
              <div className="arrow-circle">→</div>
            </Link>
          </div>

          <div className="card">
            <h3>Water Damage Restoration</h3>
            <Link to="/services/water-damage" className="card-arrow">
              <div className="arrow-circle">→</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;