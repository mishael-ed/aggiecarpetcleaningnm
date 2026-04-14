import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './OurFavoritePlaces.css';

const OurFavoritePlaces = () => {
  const favoritePlaces = [
    'SONOMA RANCH',
    'METRO VERDE',
    'TALAVERA',
    'PICHACHO HILLS',
    'LAS ALTURAS',
    'AND MORE',
  ];

  return (
    <div className="ofp-page">
      <Navbar />

      <section className="ofp-hero">
        <div className="ofp-hero-inner">
          <h1>OUR FAVORITE PLACES</h1>
          <h2>Neighborhoods we love serving around Las Cruces</h2>
          <Link to="/contact" className="ofp-connect-btn">Let's Connect</Link>
        </div>
      </section>

      <section className="ofp-list-section">
        <div className="ofp-list-inner">
          <div className="ofp-list">
            {favoritePlaces.map((place, index) => (
              <div className="ofp-pill" key={index}>
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurFavoritePlaces;

