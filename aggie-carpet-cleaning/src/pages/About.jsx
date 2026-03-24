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
          <h1>MEET THE TEAM</h1>
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

      {/* Meet the Strategist Section */}
      <section className="strategist-section">
        <div className="strategist-container">
          <div className="strategist-content">
            <h2>MEET THE LEAD MARKETING STRATEGIST</h2>
            <p>
              "Hi, I’m Ed, the lead marketing strategist for Aggie Carpet Cleaning. 
              I came on board with a focus on helping the business grow, connect with more people, 
              and make it easier for customers to get the cleaning services they need. 
              From improving how we communicate with clients to setting up systems that 
              make booking and follow-ups seamless, my goal is to make sure every interaction 
              with our brand feels smooth and professional.
              I’m passionate about building systems that don’t just bring in customers, but 
              actually create a better experience for them from start to finish. Seeing the business grow 
              and helping more homes get cleaner, healthier spaces is something I take pride in.
              When I’m not working on strategy, I’m usually exploring new ideas, working on 
              tech projects, or finding better ways to improve how businesses operate.
              It’s a pleasure to be part of the team, and we truly appreciate the opportunity to serve you"
            </p>
          </div>
          
          <div className="strategist-image">
            <img
              src={require('./strategist-photo.jpg')}
              alt="Lead Marketing Strategist - Aggie Carpet Cleaning"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;