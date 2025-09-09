import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
  faCog,
  faUserMd,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../contexts/useLanguage";
import { translations } from "../../constants/translations.ts";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, isArabic } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src="/tooth (1).webp" alt="Logo" className="img-logo" />
          <Link to="/">Oralyn</Link>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faHome} className="nav-icon" />
              {t.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
              {t.about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faCog} className="nav-icon" />
              {t.services}
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faUserMd} className="nav-icon" />
              {t.doctors}
            </NavLink>
          </li>
        </ul>
        <div className="header-actions">
          <button className="language-btn" onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faGlobe} />
            {isArabic ? "EN" : "عربي"}
          </button>
          <button className="cta-button">
            <Link to="/contact">{t.contact} →</Link>
          </button>
        </div>
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          className="mobile-menu-icon"
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
};
