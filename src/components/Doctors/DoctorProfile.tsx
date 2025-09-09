import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "./doctorsData.ts";
import "./DoctorProfile.css";

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const doctor = doctors.find((d) => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="doctor-not-found">
        <h2>Doctor Not Found</h2>
        <button onClick={() => navigate("/doctors")}>Back to Doctors</button>
      </div>
    );
  }

  return (
    <section className="doctor-profile-section">
      <div className="container">
        <button className="back-btn" onClick={() => navigate("/doctors")}>
          ← Back to Team
        </button>

        <div className="profile-content">
          <div className="profile-image">
            <img src={doctor.image} alt={doctor.name} />
          </div>

          <div className="profile-info">
            <h1 className="profile-name">{doctor.name}</h1>
            <p className="profile-specialty">{doctor.specialty}</p>
            <p className="profile-bio">{doctor.bio}</p>

            <div className="profile-details">
              <div className="detail-section">
                <h3>Education & Training</h3>
                <p>{doctor.education}</p>
                <p>{doctor.experience} of Clinical Experience</p>
              </div>

              <div className="detail-section">
                <h3>Certifications & Awards</h3>
                <ul>
                  {doctor.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>Contact Information</h3>
                <p>Phone: {doctor.phone}</p>
                <p>Email: {doctor.email}</p>
              </div>
            </div>

            <div className="profile-actions">
              <button
                className="book-appointment-btn"
                onClick={() => navigate("/doctors")}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
