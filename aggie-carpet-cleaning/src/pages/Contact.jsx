import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Contact.css';

const PRIMARY_CONTACT_EMAIL = 'mishaeledegwa@gmail.com';
const TEST_CC_EMAIL = 'aggiecarpetcleaninglc@gmail.com';
const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${PRIMARY_CONTACT_EMAIL}`;
const MAX_RETRIES = 1;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    company: '',
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitLead = async (payload) => {
    let lastError = null;

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
      try {
        const response = await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          if (response.status >= 500 && attempt < MAX_RETRIES) {
            continue;
          }
          throw new Error(`Submit failed with status ${response.status}`);
        }

        const data = await response.json();
        if (data.success === 'false' || data.success === false) {
          throw new Error(data.message || 'Form service returned an error.');
        }

        return;
      } catch (error) {
        lastError = error;
        const isTransient = error.message === 'Failed to fetch';
        if (!isTransient || attempt >= MAX_RETRIES) {
          break;
        }
      }
    }

    throw lastError || new Error('Unknown contact form error');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    if (window.location.protocol === 'file:') {
      setStatus({
        type: 'error',
        message: 'Form cannot submit from a local file. Run the site with a server (npm start or serve -s build).',
      });
      return;
    }

    setSending(true);
    setStatus({ type: '', message: '' });

    const payload = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      company: formData.company,
      _subject: `New Aggie Carpet Cleaning Lead from ${formData.firstName} ${formData.lastName}`.trim(),
      _replyto: formData.email.trim(),
      _cc: TEST_CC_EMAIL,
      _captcha: 'false',
      _template: 'table',
    };

    try {
      await submitLead(payload);
      setStatus({
        type: 'success',
        message: "Message sent successfully. We'll get back to you soon.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        company: '',
      });
    } catch (error) {
      console.error('Contact form submit failed:', error);
      const rawMessage = error?.message || '';
      let userMessage = 'Failed to send message. Please try calling us at (575) 649-3197.';

      if (rawMessage.includes('status 422')) {
        userMessage = 'Form endpoint is not activated yet. Check the FormSubmit activation email and click the confirm link.';
      } else if (rawMessage.includes('Failed to fetch')) {
        userMessage = 'Network/CORS error while sending. Verify the site is served over http(s), not opened directly as a file.';
      }

      setStatus({
        type: 'error',
        message: userMessage,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="ct-page">
      <Navbar />

      {/* Hero + Form Section */}
      <section className="ct-hero">
        <div className="ct-hero-inner">

          {/* Left: Copy */}
          <div className="ct-copy">
            <h1>PUT OUR CARPET CLEANING COMPANY TO WORK AROUND LAS CRUCES, NM AND EL PASO, TX</h1>
            <h2>Contact Aggie Carpet Cleaning today</h2>
            <p>
              Thank you for your interest in Aggie Carpet Cleaning. Our expert steam cleaners offer a range
              of home restoration services in the Las Cruces & El Paso, TX areas. From carpet cleaning and
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
            <div className="ct-form-header">
              <img src="/logo.png?v=aggie" alt="Aggie Carpet Cleaning Logo" className="ct-form-logo" />
              <h3>Contact Us!</h3>
            </div>
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

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="ct-hidden-bot-field"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <p className="ct-required-note">All fields marked with an asterisk * are required</p>

              {status.type === 'success' && (
                <div className="ct-success-message">
                  [OK] {status.message}
                </div>
              )}

              {status.type === 'error' && (
                <div className="ct-error-message">
                  [X] {status.message}
                </div>
              )}

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
            <p>Las Cruces, NM</p>
            <h4>Call Us:</h4>
            <p>(575) 649-3197</p>
            <h4>Hours:</h4>
            <div className="ct-hours-row">
              <span>Mon - Sun</span>
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
