import React from "react";
import { useNavigate } from "react-router-dom";
import "./Doctors.css";
import { doctors } from "./doctorsData";

const Doctors: React.FC = () => {
  const navigate = useNavigate();

  const handleViewProfile = (doctorId: number) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <section className="doctors-section" aria-labelledby="doctors-heading">
      <div className="container">
        <div className="doctors-header">
          <p className="doctors-subtitle">Excellence in Dental Care</p>
          <h2 id="doctors-heading" className="doctors-title">
            Meet Our Award-Winning
            <span className="title-highlight"> Dental Specialists</span>
          </h2>
          <p className="doctors-description">
            Our distinguished team of board-certified dental professionals
            combines decades of specialized training with state-of-the-art
            technology to deliver exceptional.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="card-decoration"></div>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="doctor-overlay">
                  <div className="overlay-content">
                    <button
                      className="view-profile-btn"
                      onClick={() => handleViewProfile(doctor.id)}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      View Profile
                    </button>
                  </div>
                </div>
                <div className="experience-badge">{doctor.experience}</div>
              </div>

              <div className="doctor-info">
                <div className="doctor-header-info">
                  <h3 className="doctor-name">{doctor.name}</h3>
                  <p className="doctor-specialty">{doctor.specialty}</p>
                  <div className="specialty-line"></div>
                </div>

                <p className="doctor-bio-preview">
                  {doctor.bio.substring(0, 120)}...
                </p>

                <div className="doctor-credentials">
                  <div className="credential-highlight">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 14l9-5-9-5-9 5 9 5z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>{doctor.education.split(",")[0]}</span>
                  </div>
                </div>

                <div className="doctor-achievements">
                  {doctor.achievements.slice(0, 2).map((achievement, index) => (
                    <span key={index} className="achievement-badge">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      {achievement}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                 
                  <button
                    className="secondary-action-btn"
                    onClick={() => handleViewProfile(doctor.id)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
