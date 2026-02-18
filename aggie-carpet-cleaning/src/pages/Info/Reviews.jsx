import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './Reviews.css';

const reviews = [
  {
    name: 'KIMBERLY M.',
    stars: 5,
    text: 'The cleaning service was excellent, I loved the results. The customer service was also great, very friendly and respectful. Thank you.',
  },
  {
    name: 'JOSE R.',
    stars: 5,
    text: 'Amazing service! They cleaned my carpets and they look brand new. Highly recommend Aggie Carpet Cleaning to anyone in Las Cruces.',
  },
  {
    name: 'SARAH T.',
    stars: 5,
    text: 'Very professional and thorough. My tile and grout has never looked this clean. Will definitely be calling them again.',
  },
  {
    name: 'MIKE D.',
    stars: 5,
    text: 'Quick response time and great results. They removed stains I thought were permanent. Fantastic company!',
  },
  {
    name: 'LINDA P.',
    stars: 5,
    text: 'Affordable pricing and outstanding work. The team was on time, respectful of my home, and the carpets look wonderful.',
  },
  {
    name: 'CARLOS V.',
    stars: 5,
    text: 'Used them for water damage restoration and they were lifesavers. Showed up fast and handled everything professionally.',
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((current + 1) % reviews.length);

  const review = reviews[current];

  return (
    <div className="rv-page">
      <Navbar />

      {/* Hero Section */}
      <section className="rv-hero">
        <div className="rv-hero-inner">
          <h1>REVIEWS</h1>
          <h2>See what our customers are saying</h2>
          <div className="rv-hero-btns">
            <Link to="/contact" className="rv-connect-btn">Let's Connect</Link>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noreferrer"
              className="rv-google-btn"
            >
              <img
                src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
              />
              <span>Leave us a review<br /><strong>on Google</strong></span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Carousel Section */}
      <section className="rv-carousel-section">
        <div className="rv-carousel-card">

          {/* Stars */}
          <div className="rv-stars">
            {Array.from({ length: review.stars }).map((_, i) => (
              <span key={i} className="rv-star">★</span>
            ))}
          </div>

          {/* Name */}
          <p className="rv-name">{review.name}</p>

          {/* Review Text */}
          <p className="rv-text">{review.text}</p>

          {/* Dot Navigation */}
          <div className="rv-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`rv-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Arrow buttons */}
        <button className="rv-arrow rv-arrow-left" onClick={prev}>‹</button>
        <button className="rv-arrow rv-arrow-right" onClick={next}>›</button>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;