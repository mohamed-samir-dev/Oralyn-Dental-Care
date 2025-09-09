import React from "react";
import "./Service.css";
import type { ServiceProps } from "../../types";
import { SERVICES_DATA } from "../../constants";

/**
 * Service Component
 * Displays dental services with statistics and call-to-action
 *
 * @param props - Component props
 * @returns JSX.Element
 */
const Service: React.FC<ServiceProps> = ({ className = "" }) => {
  return (
    <section
      className={`service-section ${className}`}
      aria-labelledby="services-heading"
    >
      <div className="container">
        {/* Service Header Section */}
        <header className="service-header">
          

          <h2 id="services-heading" className="service-title">
            Transform Your Smile with Expert Care
          </h2>

          <p className="service-description">
            Experience world-class dental treatments with our team of
            specialists. We combine cutting-edge technology with personalized
            care to deliver exceptional results for every patient.
          </p>

          <button className="cta-btn" aria-label="Explore our dental services">
            Explore Our Services →
          </button>
        
        </header>

        {/* Service Cards Section */}
        <div
          className="service-cards"
          role="list"
          aria-label="Available dental services"
        >
          {SERVICES_DATA.map((service) => (
            <article key={service.id} className="service-card" role="listitem">
              <div className="card-icon" aria-hidden="true">
                <img
                  src={service.icon}
                  alt={service.alt}
                  loading="lazy"
                  width="28"
                  height="28"
                />
              </div>

              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
