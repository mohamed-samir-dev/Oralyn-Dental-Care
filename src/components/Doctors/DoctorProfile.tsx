import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "./doctorsData.ts";
import type { Doctor } from "./doctorsData.ts";
import { useLanguage } from "../../contexts/useLanguage";
import { translations } from "../../constants/translations";
import "./DoctorProfile.css";

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const doctor = doctors.find((d) => d.id === Number(id));

  const getTranslatedDoctorData = (doctor: Doctor): Doctor => {
    if (language === "ar") {
      switch (doctor.id) {
        case 1:
          return {
            ...doctor,
            name: t.saraAhmed,
            specialty: t.cosmeticRestorativeDentistry,
            bio: t.saraDescription,
            education: t.harvardDental,
            achievements: [t.bestCosmeticDentist, t.advancedImplant, t.invisalignElite]
          };
        case 2:
          return {
            ...doctor,
            name: t.mohammedAli,
            specialty: t.oralMaxillofacialSurgery,
            bio: t.mohamedDescription,
            education: t.uclaDentistry,
            achievements: [t.boardCertifiedSurgeon, t.minimallyInvasive, t.tmjSpecialist]
          };
        case 3:
          return {
            ...doctor,
            name: t.fatmaHassan,
            specialty: t.pediatricDentistry,
            bio: t.fatimaDescription,
            education: t.columbiaDental,
            achievements: [t.childFriendlyAward, t.sedationCertified, t.specialNeedsDentistry]
          };
        default:
          return doctor;
      }
    }
    return doctor;
  };

  if (!doctor) {
    return (
      <div className="doctor-not-found">
        <h2>{t.doctorNotFound}</h2>
        <button className="back-btn" onClick={() => navigate("/doctors")}>{t.backToDoctors}</button>
      </div>
    );
  }

  const translatedDoctor = getTranslatedDoctorData(doctor);

  return (
    <section className="doctor-profile-section">
      <div className="container">
        <button className="back-btn" onClick={() => navigate("/doctors")}>
          ← {t.backToTeam}
        </button>

        <div className="profile-content">
          <div className="profile-image">
            <img src={translatedDoctor.image} alt={translatedDoctor.name} />
          </div>

          <div className="profile-info">
            <h1 className="profile-name">{translatedDoctor.name}</h1>
            <p className="profile-specialty">{translatedDoctor.specialty}</p>
            <p className="profile-bio">{translatedDoctor.bio}</p>

            <div className="profile-details">
              <div className="detail-section">
                <h3>{t.educationTraining}</h3>
                <p>{translatedDoctor.education}</p>
                <p>{translatedDoctor.experience} {t.clinicalExperience}</p>
              </div>

              <div className="detail-section">
                <h3>{t.certificationsAwards}</h3>
                <ul>
                  {translatedDoctor.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>{t.contactInformation}</h3>
                <p>{t.phone}: {translatedDoctor.phone}</p>
                <p>{t.email}: {translatedDoctor.email}</p>
              </div>
            </div>

            <div className="profile-actions">
              <button
                className="book-appointment-btn"
                onClick={() => navigate("/doctors")}
              >
                {t.bookAppointment}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
