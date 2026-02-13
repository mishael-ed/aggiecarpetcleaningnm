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

      {/* Spanish Section */}
      <section className="spanish-section">
        <div className="spanish-content">
          <h2>¡SE HABLA ESPAÑOL!</h2>
          <button className="talk-btn">Talk With Us Now</button>
        </div>
      </section>

      {/* Take Cleaning Section */}
      <section className="cleaning-section">
        <div className="cleaning-container">
          <div className="cleaning-image">
            <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800" alt="Carpet cleaning" />
          </div>
          <div className="cleaning-text">
            <h2>TAKE CLEANING TO ANOTHER LEVEL</h2>
            <h3>Hire our carpet cleaning company in the Las Cruces and Deming, NM areas</h3>
            <p>
              Dirty floors and furniture are typically the first aspects people notice about your home. 
              Revitalize your space with assistance from Aggie Carpet Cleaning. We provide a variety of 
              steam cleaning services throughout Las Cruces and Deming, NM. You can trust us to eliminate 
              dirt and grime from your fabrics and floors, restoring your home's appearance and fragrance 
              to that of being brand new.
            </p>
          </div>
        </div>
      </section>

      {/* Restore Section */}
      <section className="restore-section">
        <div className="restore-content">
          <h2>RESTORE YOUR FABRICS AND<br />FLOORING WITH ONE CALL</h2>
          <p>Schedule a consultation with our steam cleaning team today</p>
          <button className="request-btn">Request Service</button>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="professionals-section">
        <div className="professionals-container">
          <div className="professionals-text">
            <h2>PROFESSIONALS AT YOUR SERVICE</h2>
            <p className="intro-text">
              You don't want to use harsh chemicals or store-bought treatments on your floor or furniture 
              stains – it might only make the problem worse. Instead, hire the pros at Aggie Carpet Cleaning 
              for a job well done. Our full-service carpet cleaning company offers...
            </p>
            
            <div className="services-grid-list">
              <div className="service-item">
                <span className="checkmark">✓</span>
                <span>Carpet cleaning services</span>
              </div>
              <div className="service-item">
                <span className="checkmark">✓</span>
                <span>Tile floor cleaning services</span>
              </div>
              <div className="service-item">
                <span className="checkmark">✓</span>
                <span>Upholstery cleaning services</span>
              </div>
              <div className="service-item">
                <span className="checkmark">✓</span>
                <span>Grout cleaning services</span>
              </div>
              <div className="service-item">
                <span className="checkmark">✓</span>
                <span>Rug cleaning services</span>
              </div>
              <div className="service-item">
                <span className="checkmark">✓</span>
                <span>Water damage restoration services</span>
              </div>
            </div>

            <p className="outro-text">
              Leave it to us to refresh your living spaces. Reach out now for professional steam cleaning 
              services in Las Cruces & Deming, NM.
            </p>
          </div>

          <div className="professionals-image">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800" alt="Professional cleaning" />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="what-sets-us-apart">
        <h2>WHAT SETS US APART?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <p>We're locally owned and operated</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <p>We're fully licensed and insured</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👍</div>
            <p>We offer a satisfaction guarantee</p>
          </div>
        </div>

        <p className="cta-text">
          See what our carpet cleaning company is all about – schedule a consultation with us today.
        </p>

        <div className="google-badge">
          <img src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />
          <div className="rating-text">CLICK HERE</div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="service-area-section">
        <div className="service-area-container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432107.8187431396!2d-107.3488!3d32.3199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e05c3d6e000001%3A0x1c8e4e7f1c1b3e8!2sLas%20Cruces%2C%20NM!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Service Area Map"
            ></iframe>
          </div>

          <div className="service-area-content">
            <h2>OUR SERVICE AREA</h2>
            
            <div className="cities-grid">
              <div className="city-column">
                <p>Silver City, NM</p>
                <p>Mesilla, NM</p>
                <p>Dona Ana, NM</p>
                <p>El Paso, TX</p>
              </div>
              <div className="city-column">
                <p>Las Cruces, NM</p>
                <p>Lordsburg, NM</p>
                <p>Vado, NM</p>
                <p>Sunland Park, NM</p>
              </div>
              <div className="city-column">
                <p>Deming, NM</p>
                <p>Columbus, NM</p>
                <p>Radium Springs, NM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f">f</i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram">📷</i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube">▶</i></a>
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest">P</i></a>
            <a href="#" aria-label="TikTok"><i className="fab fa-tiktok">♪</i></a>
          </div>

          <div className="footer-info">
            <div className="contact-info">
              <p>Las Cruces, NM 88001</p>
              <p>Deming, NM 88030</p>
            </div>
            <div className="copyright">
              <p>Copyright © 2026 Aggie Carpet Cleaning | All Rights Reserved</p>
            </div>
          </div>
        </div>

        <button className="floating-cta">Get In Touch</button>
      </footer>
    </div>
  );
};

export default Home;