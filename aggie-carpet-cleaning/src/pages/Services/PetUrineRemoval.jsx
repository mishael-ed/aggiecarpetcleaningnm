import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './PetUrineRemoval.css';

const PetUrineRemoval = () => {
  return (
    <div className="pur-page">
      <Navbar />

      {/* Hero Section */}
      <section className="pur-hero">
        <div className="pur-hero-inner">
          <h1>ELIMINATE PET ODORS FOR GOOD</h1>
          <h2>Professional Pet Urine Removal in Las Cruces and El Paso</h2>
          <p>
            If you're dealing with stubborn pet urine odors in your carpets, you need more than just store-bought 
            solutions. At Aggie Carpet Cleaning, we don't just mask the smell—we eliminate it completely using 
            professional-grade equipment and techniques that get to the root of the problem.
          </p>
          <p>
            Our specialized pet urine removal service is available throughout Las Cruces and El Paso, TX, giving 
            your home the deep clean it deserves. Say goodbye to lingering odors and hello to fresh, clean carpets.
          </p>
          <p className="pur-cta-line">Contact us today to schedule your pet urine removal service!</p>
          <Link to="/contact" className="pur-connect-btn">Let's Connect</Link>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="pur-different">
        <div className="pur-different-inner">
          <div className="pur-different-text">
            <h2>WHY OUR METHOD<br />WORKS BETTER</h2>
            <p>
              Most carpet cleaners use "enzyme" treatments to mask pet urine odors. These are similar to the 
              chemicals you can buy at the store, and they only provide temporary relief. At Aggie Carpet Cleaning, 
              we take a different approach—we actually GET RID of the urine instead of just covering it up.
            </p>
            <p>
              Our process involves flooding the affected area with a specialized powdered peroxide solution, 
              then extracting it using a Water Claw. The Water Claw is a professional-grade tool with a flat 
              plate and approximately 50 extraction holes at the bottom that literally sucks out the urine from 
              deep within your carpet fibers and padding.
            </p>
            <p>
              This method is far superior to simply spraying residential-grade chemicals on top of the stain 
              and hoping for the best. We remove the source of the odor, not just the smell.
            </p>

            <div className="pur-checklist">
              <div className="pur-check-item">
                <span className="pur-checkmark">✓</span>
                <span>Professional-grade powdered peroxide treatment</span>
              </div>
              <div className="pur-check-item">
                <span className="pur-checkmark">✓</span>
                <span>Water Claw extraction technology</span>
              </div>
              <div className="pur-check-item">
                <span className="pur-checkmark">✓</span>
                <span>Deep penetration to carpet padding</span>
              </div>
              <div className="pur-check-item">
                <span className="pur-checkmark">✓</span>
                <span>Complete odor elimination, not masking</span>
              </div>
            </div>

            <p className="pur-italic">
              Ask us about our pet urine removal process!
            </p>
          </div>

          <div className="pur-different-image">
            <img
              src={require('../pet-urine-equipment.jpg')}
              alt="Water Claw technology"
            />
            <p className="image-caption">Water Claw technology</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PetUrineRemoval;