import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setServicesOpen(false);
    setInfoOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setInfoOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Aggie Carpet Cleaning" />
        </Link>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="6" y1="6" x2="26" y2="26" stroke="#1a3a4a" strokeWidth="4" strokeLinecap="round"/>
              <line x1="26" y1="6" x2="6" y2="26" stroke="#1a3a4a" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          
          <li className={`dropdown ${servicesOpen ? 'dropdown-open' : ''}`}>
            <span onClick={() => setServicesOpen(!servicesOpen)}>Services</span>
            <ul className="dropdown-menu">
              <li><Link to="/services/carpet-cleaning" onClick={closeMobileMenu}>Carpet Cleaning</Link></li>
              <li><Link to="/services/furniture-rugs" onClick={closeMobileMenu}>Furniture and Rugs</Link></li>
              <li><Link to="/services/tile-grout" onClick={closeMobileMenu}>Tile and Grout</Link></li>
            </ul>
          </li>
          
          <li className={`dropdown ${infoOpen ? 'dropdown-open' : ''}`}>
            <span onClick={() => setInfoOpen(!infoOpen)}>Info</span>
            <ul className="dropdown-menu">
              <li><Link to="/info/areas-we-serve" onClick={closeMobileMenu}>Areas We Serve</Link></li>
              <li><Link to="/info/reviews" onClick={closeMobileMenu}>Reviews</Link></li>
              <li><Link to="/info/faq" onClick={closeMobileMenu}>FAQ</Link></li>
              <li><Link to="/info/blog" onClick={closeMobileMenu}>Blog</Link></li>
            </ul>
          </li>
          
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;