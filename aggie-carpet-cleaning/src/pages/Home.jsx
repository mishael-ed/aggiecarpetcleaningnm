import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              CHOOSE THE TRUSTED CARPET<br />
              CLEANING COMPANY IN LAS CRUCES<br />
              AND EL PASO, TX
            </h1>
            <p className="hero-subtitle">Partner with the pros at Aggie Carpet Cleaning</p>
            <Link to="/contact" className="hero-btn">Get In Touch</Link>
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
        </div>
      </section>

      {/* Spanish Section */}
      <section className="spanish-section">
        <div className="spanish-content">
          <h2>¡SE HABLA ESPAÑOL!</h2>
          <Link to="/contact" className="talk-btn">Talk With Us Now</Link>
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
            <h3>Hire our carpet cleaning company in the Las Cruces and El Paso, TX areas</h3>
            <p>
              Dirty floors and furniture are typically the first aspects people notice about your home. 
              Revitalize your space with assistance from Aggie Carpet Cleaning. We provide a variety of 
              steam cleaning services throughout Las Cruces and El Paso, TX. You can trust us to eliminate 
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
          <Link to="/contact" className="request-btn">Request Service</Link>
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
              services in Las Cruces & El Paso, TX.
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
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
            </div>
            <p>We're locally owned and operated</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
              </svg>
            </div>
            <p>We're fully licensed and insured</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" fill="currentColor"/>
              </svg>
            </div>
            <p>We offer a satisfaction guarantee</p>
          </div>
        </div>

        <p className="cta-text">
          See what our carpet cleaning company is all about – schedule a consultation with us today.
        </p>

        <a href="https://www.google.com/maps/place/Aggie+Carpet+Cleaning/@32.4182087,-106.820094,9z/data=!3m1!4b1!4m6!3m5!1s0x627876fdc26ad2c3:0xbcdcadaac9968bde!8m2!3d32.4182087!4d-106.820094!16s%2Fg%2F11kqw890q9?entry=tts&g_ep=EgoyMDI1MTIwOS4wIPu8ASoASAFQAw%3D%3D&skid=03fede66-fd27-4eac-8ced-52512dbee6c8" target="_blank" rel="noreferrer" className="google-badge">
          <img src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" />
          <span className="google-badge-text">CLICK<br />HERE</span>
        </a>
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
                <p>El Paso, TX</p>
                <p>Columbus, NM</p>
                <p>Radium Springs, NM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;