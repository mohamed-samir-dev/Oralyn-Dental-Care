import React from "react";
import "./Service.css";
import type { ServiceProps } from "../../types/index";
import { useLanguage } from "../../contexts/useLanguage";
import { translations } from "../../constants/translations";

/**
 * Service Component
 * Displays dental services with statistics and call-to-action
 *
 * @param props - Component props
 * @returns JSX.Element
 */
const Service: React.FC<ServiceProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className={`service-section ${className}`}
      aria-labelledby="services-heading"
    >
      <div className="container">
        {/* Service Header Section */}
        <header className="service-header">
          <h2 id="services-heading" className="service-title">
            {t.transformSmileTitle}
          </h2>

          <p className="service-description">{t.transformSmileDescription}</p>

          <button className="cta-btn" aria-label="Explore our dental services">
            {t.exploreServices} →
          </button>
        </header>

        {/* Service Cards Section */}
        <div
          className="service-cards"
          role="list"
          aria-label="Available dental services"
        >
          <article className="service-card" role="listitem">
            <div className="card-icon" aria-hidden="true">
              <img
                src="/dental-care.png"
                alt="General Dentistry Icon"
                loading="lazy"
                width="28"
                height="28"
              />
            </div>
            <div className="card-content">
              <h3>{t.generalDentistry}</h3>
              <p>{t.generalDentistryDesc}</p>
            </div>
          </article>

          <article className="service-card" role="listitem">
            <div className="card-icon" aria-hidden="true">
              <img
                src="/dental-implant.png"
                alt="Restorative Dentistry Icon"
                loading="lazy"
                width="28"
                height="28"
              />
            </div>
            <div className="card-content">
              <h3>{t.restorativeDentistry}</h3>
              <p>{t.restorativeDentistryDesc}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Service;
