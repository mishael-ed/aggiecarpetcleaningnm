import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Aggie Carpet Cleaning" />
        </Link>

        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li className="dropdown">
            <span onClick={() => toggleDropdown('services')}>Services</span>
            <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
              <div>
                <li><Link to="/services/carpet-cleaning" onClick={closeMobileMenu}>Carpet Cleaning</Link></li>
                <li><Link to="/services/furniture-rugs" onClick={closeMobileMenu}>Furniture and Rugs</Link></li>
                <li><Link to="/services/tile-grout" onClick={closeMobileMenu}>Tile and Grout</Link></li>
                <li><Link to="/services/water-damage" onClick={closeMobileMenu}>Water Damage Restoration</Link></li>
                <li><Link to="/services/mold-remediation" onClick={closeMobileMenu}>Mold Remediation</Link></li>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            <span onClick={() => toggleDropdown('info')}>Info</span>
            <ul className={`dropdown-menu ${activeDropdown === 'info' ? 'active' : ''}`}>
              <div>
                <li><Link to="/info/areas-we-serve" onClick={closeMobileMenu}>Areas We Serve</Link></li>
                <li><Link to="/info/reviews" onClick={closeMobileMenu}>Reviews</Link></li>
                <li><Link to="/info/faq" onClick={closeMobileMenu}>FAQ</Link></li>
                <li><Link to="/info/blog" onClick={closeMobileMenu}>Blog</Link></li>
              </div>
            </ul>
          </li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;