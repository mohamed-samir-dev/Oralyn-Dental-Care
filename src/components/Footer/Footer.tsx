import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-hero">
        <div className="hero-image">
          <img src="/dentist-674654_1280.jpg" alt="Dental Care" />
        </div>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h3>Ready to Transform Your Smile?</h3>
              <p>
                Book your consultation today and take the first step toward
                optimal dental health.
              </p>
              <Link to="/contact" className="cta-button">
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <h2>Oralyn</h2>
                <p>Excellence in Dental Care</p>
              </div>
              <p className="footer-description">
                Providing world-class dental treatments with cutting-edge
                technology and personalized care for every patient.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/doctors">Our Doctors</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">General Dentistry</a>
                </li>
                <li>
                  <a href="#">Cosmetic Dentistry</a>
                </li>
                <li>
                  <a href="#">Orthodontics</a>
                </li>
                <li>
                  <a href="#">Oral Surgery</a>
                </li>
                <li>
                  <a href="#">Pediatric Dentistry</a>
                </li>
              </ul>
            </div>

            <div className="footer-section contact-section">
              <h4>Get In Touch</h4>
              <p className="contact-description">
                Ready to schedule your appointment? We're here to help you
                achieve your perfect smile.
              </p>
              <Link to="/contact" className="contact-cta-button">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>&copy; 2024 Oralyn Dental Care. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
