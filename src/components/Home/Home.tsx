import React from "react";
import "./home.css";
import { Analysis } from "../Analysis/Analysis";
import { useLanguage } from "../../contexts/useLanguage";
import { translations } from "../../constants/translations";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <main className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">{t.heroTitle}</h2>
          <p className="hero-description">{t.heroDescription}</p>
          <Link to="/contact" className="cta-btn">
            {t.bookAppointment} →
          </Link>
        </div>
        <div className="hero-media">
          <div className="hero-image-container">
            <img
              src="/pexels-karolina-grabowska-6627529.webp"
              alt="Dental Care"
              className="hero-image"
            />
          </div>
        </div>
      </main>
      <Analysis />
    </>
  );
};

export default Home;
