import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useLanguage } from "../../contexts/useLanguage";
import { translations } from "../../constants/translations.ts";

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <h2>Oralyn</h2>
                <p>{t.excellenceInDentalCare}</p>
              </div>
              <p className="footer-description">{t.providingWorldClass}</p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/1GZtCVVXwh/"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/msamir.dev?igsh=b3Nra3hrd3QxMTc"
                  aria-label="Instagram"
                  target="_blank"
                >
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
                <a href="" aria-label="Twitter">
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
              <h4>{t.quickLinks}</h4>
              <ul>
                <li>
                  <Link to="/">{t.home}</Link>
                </li>
                <li>
                  <Link to="/about">{t.aboutUs}</Link>
                </li>
                <li>
                  <Link to="/services">{t.services}</Link>
                </li>
                <li>
                  <Link to="/doctors">{t.ourDoctors}</Link>
                </li>
                <li>
                  <Link to="/contact">{t.contact}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>{t.services}</h4>
              <ul>
                <li>
                  <a href="#">{t.generalDentistry}</a>
                </li>
                <li>
                  <a href="#">{t.cosmeticDentistry}</a>
                </li>
                <li>
                  <a href="#">{t.orthodontics}</a>
                </li>
                <li>
                  <a href="#">{t.oralSurgery}</a>
                </li>
                <li>
                  <a href="#">{t.pediatricDentistry}</a>
                </li>
              </ul>
            </div>

            <div className="footer-section contact-section">
              <h4>{t.getInTouch}</h4>
              <p className="contact-description">{t.readyToSchedule}</p>
              <Link to="/contact" className="contact-cta-button">
                {t.bookAppointment}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <p>{t.allRightsReserved}</p>
            <div className="footer-links">
              <a href="#">{t.privacyPolicy}</a>
              <a href="#">{t.termsOfService}</a>
              <a href="#">{t.cookiePolicy}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
