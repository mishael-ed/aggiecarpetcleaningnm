import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import './Blog.css';

const posts = [
  {
    title: 'HOW TO CHOOSE CARPET CLEANERS IN LAS CRUCES',
    subtitle: 'How to Choose Carpet Cleaners in Las Cruces',
    slug: 'how-to-choose-carpet-cleaners-las-cruces',
  },
  {
    title: 'FINDING QUALITY UPHOLSTERY CLEANING IN MESILLA',
    subtitle: 'Finding Quality Upholstery Cleaning in Mesilla: What to Know',
    slug: 'finding-quality-upholstery-cleaning-mesilla',
  },
  {
    title: "DEMING RESIDENT'S GUIDE TO TILE AND GROUT",
    subtitle: "Deming Resident's Guide to Tile and Grout Cleaning",
    slug: 'deming-guide-tile-grout-cleaning',
  },
  {
    title: 'HOW TO FIND WATER DAMAGE RESTORATION IN HATCH',
    subtitle: 'How to Find Water Damage Restoration in Hatch',
    slug: 'water-damage-restoration-hatch',
  },
  {
    title: 'WHAT TO EXPECT FROM MOLD REMEDIATION IN ANTHONY',
    subtitle: 'What to Expect from Mold Remediation in Anthony',
    slug: 'mold-remediation-anthony',
  },
  {
    title: 'WHEN TO CALL CARPET CLEANERS IN SUNLAND PARK',
    subtitle: 'When to Call Carpet Cleaners in Sunland Park',
    slug: 'carpet-cleaners-sunland-park',
  },
];

const Blog = () => {
  const [query, setQuery] = useState('');

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <h1>RESOURCES</h1>
          <h2>View our blogs</h2>
          <Link to="/contact" className="blog-connect-btn">Let's Connect</Link>

          {/* Search Bar */}
          <div className="blog-search">
            <input
              type="text"
              placeholder="Search the Resources"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="blog-search-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="blog-grid-section">
        <div className="blog-grid-inner">
          {filtered.length > 0 ? (
            <div className="blog-grid">
              {filtered.map((post, index) => (
                <div className="blog-card" key={index}>
                  <h3>{post.title}</h3>
                  <p>{post.subtitle}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="blog-no-results">No results found for "{query}"</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;