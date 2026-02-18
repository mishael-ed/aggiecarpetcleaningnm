import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './MoldRemediation.css';

const MoldRemediation = () => {
  return (
    <div className="mr-page">
      <Navbar />

      {/* Hero Section */}
      <section className="mr-hero">
        <div className="mr-hero-inner">
          <h1>MOLD REMEDIATION IN LAS CRUCES: TRUSTED SOLUTIONS</h1>
          <h2>Protect Your Home with Effective Mold Remediation</h2>
          <p>
            Mold can pose serious health risks and damage to your home. If you're facing mold issues in Las
            Cruces, it's crucial to address them promptly and effectively. Our team offers expert mold
            remediation services to restore safety and comfort to your living space.
          </p>
          <p>Dirty floors and furniture are often the first things people notice about your home.</p>
          <p>
            Freshen things up with help from Aggie Carpet Cleaning. We offer a range of steam cleaning
            services around Las Cruces & Deming, NM. You can count on us to remove dirt and grime from your
            fabrics and floors to make your home look and smell as good as new again.
          </p>
          <p className="mr-cta-line">Contact us today to schedule mold remediation in Las Cruces.</p>
        </div>
      </section>

      {/* How Does Mold Remediation Work Section */}
      <section className="mr-how">
        <div className="mr-how-inner">
          <div className="mr-how-text">
            <h2>HOW DOES MOLD REMEDIATION WORK IN LAS CRUCES?</h2>
            <p>
              Our mold remediation process is thorough and tailored to effectively eliminate mold from your
              home. We begin with a comprehensive inspection to identify the extent of the mold growth. Next,
              we contain the affected areas to prevent spores from spreading. Using specialized equipment, we
              remove the mold and treat the surfaces to prevent future growth.
            </p>
            <p>
              Clients can expect a professional approach from Aggie Carpet Cleaning, ensuring your home is
              safe and mold-free. Dirty floors and furniture are often the first things people notice about
              your home.
            </p>
            <p>
              Our team is dedicated to providing high-quality service, utilizing advanced techniques and
              equipment for optimal results.
            </p>
            <p className="mr-outro">
              Schedule your mold remediation today for professional service in Las Cruces.
            </p>
          </div>

          <div className="mr-how-image">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
              alt="Mold on wall"
            />
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="mr-different-banner">
        <div className="mr-different-banner-inner">
          <h2>WHAT MAKES US DIFFERENT</h2>
          <Link to="/contact" className="mr-connect-btn">Let's Connect</Link>
        </div>
      </section>

      <section className="mr-different">
        <div className="mr-different-inner">
          <p className="mr-different-intro">
            With a commitment to quality and customer satisfaction, we stand out in the mold remediation
            industry.
          </p>

          <div className="mr-cards-grid">
            <div className="mr-card">
              <h4>How do we ensure quality?</h4>
              <p>We use a meticulous process to thoroughly remove mold.</p>
            </div>
            <div className="mr-card">
              <h4>What's our approach?</h4>
              <p>We focus on prevention as well as removal to protect your investment.</p>
            </div>
            <div className="mr-card">
              <h4>What experience do we bring?</h4>
              <p>Our team is skilled in handling a variety of mold situations.</p>
            </div>
            <div className="mr-card">
              <h4>Why choose local?</h4>
              <p>Our knowledge of Las Cruces-specific conditions helps us tailor our services effectively.</p>
            </div>
            <div className="mr-card">
              <h4>How do we protect your investment?</h4>
              <p>We use preventative treatments to minimize future mold risks.</p>
            </div>
          </div>

          <p className="mr-different-outro">
            For peace of mind and a healthier home, contact us today to schedule mold remediation in Las
            Cruces.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MoldRemediation;