import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const location = useLocation();

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

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth > 992) return;
      
      if (mobileMenuOpen && !e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      // Delay adding listener to avoid immediate trigger
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

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
          <li><Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active-link' : ''}>Home</Link></li>
          
          <li className={`dropdown ${servicesOpen ? 'dropdown-open' : ''}`}>
            <span onClick={() => setServicesOpen(!servicesOpen)} className={location.pathname.startsWith('/services') ? 'active-link' : ''}>Services</span>
            <ul className="dropdown-menu">
              <li><Link to="/services/carpet-cleaning" onClick={closeMobileMenu} className={location.pathname === '/services/carpet-cleaning' ? 'active-link' : ''}>Carpet Cleaning</Link></li>
              <li><Link to="/services/furniture-rugs" onClick={closeMobileMenu} className={location.pathname === '/services/furniture-rugs' ? 'active-link' : ''}>Furniture and Rugs</Link></li>
              <li><Link to="/services/tile-grout" onClick={closeMobileMenu} className={location.pathname === '/services/tile-grout' ? 'active-link' : ''}>Tile and Grout</Link></li>
            </ul>
          </li>
          
          <li className={`dropdown ${infoOpen ? 'dropdown-open' : ''}`}>
            <span onClick={() => setInfoOpen(!infoOpen)} className={location.pathname.startsWith('/info') || location.pathname.startsWith('/blog') ? 'active-link' : ''}>Info</span>
            <ul className="dropdown-menu">
              <li><Link to="/info/areas-we-serve" onClick={closeMobileMenu} className={location.pathname === '/info/areas-we-serve' ? 'active-link' : ''}>Areas We Serve</Link></li>
              <li><Link to="/info/reviews" onClick={closeMobileMenu} className={location.pathname === '/info/reviews' ? 'active-link' : ''}>Reviews</Link></li>
              <li><Link to="/info/faq" onClick={closeMobileMenu} className={location.pathname === '/info/faq' ? 'active-link' : ''}>FAQ</Link></li>
              <li><Link to="/info/blog" onClick={closeMobileMenu} className={location.pathname === '/info/blog' || location.pathname.startsWith('/blog') ? 'active-link' : ''}>Blog</Link></li>
            </ul>
          </li>
          
          <li><Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;