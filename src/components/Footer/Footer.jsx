// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";


// Footer component
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="Content">
          <h1><span className="highlight">F</span>ind <span className="highlight">I</span>t</h1>
          <p>Find the best currency exchange rates</p>
        </div>
        <div className="social-media">
          <FaFacebook className="fab fa-facebook" />
          <FaTwitter className="fab fa-twitter" />
          <FaInstagram className="fab fa-instagram" />
          <FaGithub className="fab fa-github" />
          <FaLinkedin className="fab fa-linkedin" />
        </div>
        <div className="footer-content">
          <p><span className="highlight">F</span>ind <span className="highlight">I</span>t © 2024. Developed with <FaHeart className="heart" /></p>
          <p><span className="highlight">D</span>eveloped by <span className="highlight">O</span>mar</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
