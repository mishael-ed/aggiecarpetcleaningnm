import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1>ABOUT AGGIE CARPET CLEANING</h1>
          <h2>Your trusted carpet cleaning partner in Las Cruces and El Paso</h2>
        </div>
      </section>

      {/* Meet the Owner Section */}
      <section className="owner-section">
        <div className="owner-container">
          <div className="owner-image">
            <img
              src={require('./owner-photo.jpg')}
              alt="Judaah - Owner of Aggie Carpet Cleaning"
            />
          </div>
          
          <div className="owner-content">
            <h2>MEET THE OWNER</h2>
            <p>
              "Hi, I'm Judaah the owner of Aggie Carpet Cleaning. I started this business in 2023 with a tiny 
              electric powered machine and now worked my way up to a gas powered truck mount. I have a bachelors 
              in Criminal Justice from NMSU, yes go Aggies lol, and I have plans to further my education. 
              I love servicing the New Mexico Texas Area and have been here a greater portion of my life. 
              When I'm not at work I am golfing, traveling or getting involved with my community. It's such 
              a pleasure to meet you and serve you!"
            </p>
            <Link to="/contact" className="about-cta-btn">Get In Touch</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;