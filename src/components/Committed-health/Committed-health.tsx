import React from "react";
import "./Committed-health.css";
import { useLanguage } from "../../contexts/useLanguage";
import { translations } from "../../constants/translations";

const CommittedHealth: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="committed-health-section">
      <div className="container">
        <div className="committed-health-image">
          <img
            src="/ai-generated-8223597_1280.jpg"
            alt="Professional dental care team"
            className="committed-health-image"
          />
        </div>
        <div className="committed-health-content">
          <h2>{t.committedExcellence}</h2>
          <p>
            {t.committedDescription}
          </p>
          <button
            className="health-cta-btn"
            aria-label="Learn more about our comprehensive dental services"
          >
            {t.learnMore} →
          </button>{" "}
          <div className="committed-health-gallery">
            <div className="image-grid">
              <img
                src="/dentist-674654_1280.jpg"
                alt="Modern dental treatment room"
                className="committed-health-image"
              />
              <img
                src="/dentist-8729626_1280.jpg"
                alt="Advanced dental equipment"
                className="committed-health-image"
              />
            </div>
            <div className="image-content">
              <p>
                {t.modernFacilities}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommittedHealth;
