import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">in</a>
          <a href="#" aria-label="YouTube">▶</a>
          <a href="#" aria-label="Pinterest">P</a>
          <a href="#" aria-label="TikTok">♪</a>
        </div>

        <div className="footer-info">
          <div className="contact-info">
            <p>Las Cruces, NM 88001</p>
            <p>Deming, NM 88030</p>
          </div>
          <div className="copyright">
            <p>Copyright © 2026 Aggie Carpet Cleaning | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;