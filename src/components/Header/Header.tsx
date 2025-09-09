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
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faCog} className="nav-icon" />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" onClick={() => setIsMenuOpen(false)}>
              <FontAwesomeIcon icon={faUserMd} className="nav-icon" />
              Doctors
            </NavLink>
          </li>
        </ul>
        <button className="cta-button">
          <Link to="/contact">Contact →</Link>
        </button>
        <FontAwesomeIcon
          icon={isMenuOpen ? faTimes : faBars}
          className="mobile-menu-icon"
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
};