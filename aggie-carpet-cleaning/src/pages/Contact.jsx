import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    // EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL IDs
    const serviceID = 'service_xracmjm';
    const templateID = 'template_2fqzuxh';
    const publicKey = 'nEYXwMZTclNB9EV5z';

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: 'edmishaelbiz@gmail.com',
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
        setSending(false);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setStatus('error');
        setSending(false);
      });
  };

  return (
    <div className="ct-page">
      <Navbar />

      {/* Hero + Form Section */}
      <section className="ct-hero">
        <div className="ct-hero-inner">

          {/* Left: Copy */}
          <div className="ct-copy">
            <h1>PUT OUR CARPET CLEANING COMPANY TO WORK AROUND LAS CRUCES AND DEMING, NM</h1>
            <h2>Contact Aggie Carpet Cleaning today</h2>
            <p>
              Thank you for your interest in Aggie Carpet Cleaning. Our expert steam cleaners offer a range
              of home restoration services in the Las Cruces & Deming, NM areas. From carpet cleaning and
              area rug cleaning to grout cleaning and water damage restoration services, we'll do what it
              takes to make your home look as good as new.
            </p>
            <p>
              Call 575-649-3197 today to schedule a consultation. You can also submit the form on this page
              to request a quote.
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="ct-form-wrap">
            <h3>Contact Us!</h3>
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-row">
                <div className="ct-field">
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ct-field">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ct-row">
                <div className="ct-field">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ct-field">
                  <label>Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ct-field ct-full">
                <label>Message*</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <p className="ct-required-note">All fields marked with an asterisk * are required</p>

              {status === 'success' && (
                <div className="ct-success-message">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="ct-error-message">
                  ✗ Failed to send message. Please try calling us at (575) 649-3197.
                </div>
              )}

              {/* reCAPTCHA placeholder */}
              <div className="ct-recaptcha">
                <div className="ct-recaptcha-box">
                  <input type="checkbox" id="robot" />
                  <label htmlFor="robot">I'm not a robot</label>
                </div>
                <div className="ct-recaptcha-logo">
                  <div className="ct-recaptcha-icon">reCAPTCHA</div>
                  <div className="ct-recaptcha-sub">Privacy · Terms</div>
                </div>
              </div>

              <button type="submit" className="ct-submit-btn" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Location Cards Section */}
      <section className="ct-locations">
        <div className="ct-locations-inner">

          <div className="ct-location-card">
            <h2>AGGIE CARPET CLEANING</h2>
            <h4>Our Location:</h4>
            <p>Las Cruces, NM 88001</p>
            <h4>Call Us:</h4>
            <p>(575) 649-3197</p>
            <h4>Hours:</h4>
            <div className="ct-hours-row">
              <span>Mon – Sun</span>
              <span>Open 24 Hours</span>
            </div>
          </div>

          <div className="ct-location-card">
            <h2>AGGIE CARPET CLEANING</h2>
            <h4>Our Location:</h4>
            <p>Deming, NM 88030</p>
            <h4>Call Us:</h4>
            <p>(505) 538-5469</p>
            <h4>Hours:</h4>
            <div className="ct-hours-row">
              <span>Mon – Sun</span>
              <span>Open 24 Hours</span>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;