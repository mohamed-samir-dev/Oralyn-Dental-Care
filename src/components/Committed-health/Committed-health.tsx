import React from "react";
import "./Committed-health.css";

const CommittedHealth: React.FC = () => {
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
          <h2>Committed to Excellence in Dental Care</h2>
          <p>
            At Oralyn Dental Care, we have been dedicated to helping patients
            achieve healthy, beautiful smiles for over a decade.
          </p>
          <button
            className="health-cta-btn"
            aria-label="Learn more about our comprehensive dental services"
          >
            Learn More →
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
                Our commitment to excellence is reflected in our
                state-of-the-art facilities, advanced dental equipment, and
                personalized care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommittedHealth;
