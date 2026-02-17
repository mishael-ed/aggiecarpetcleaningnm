import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Aggie Carpet Cleaning" />
        </Link>

        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <span>Services</span>
            <ul className="dropdown-menu">
              <li><Link to="/services/carpet-cleaning">Carpet Cleaning</Link></li>
              <li><Link to="/services/furniture-rugs">Furniture and Rugs</Link></li>
              <li><Link to="/services/tile-grout">Tile and Grout</Link></li>
              <li><Link to="/services/water-damage">Water Damage Restoration</Link></li>
              <li><Link to="/services/mold-remediation">Mold Remediation</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <span>Info</span>
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
          <a href="tel:+15751234567" className="cta-btn">Call Us In Las Cruces</a>
          <a href="tel:+15759876543" className="cta-btn">Call Us In Deming</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;