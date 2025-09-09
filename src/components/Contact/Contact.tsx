import React, { useState } from "react";
import "./Contact.css";
import { useLanguage } from "../../contexts/useLanguage";
import { translations } from "../../constants/translations";

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <p className="contact-subtitle">{t.getInTouch}</p>
          <h2 className="contact-title">
            {t.scheduleConsultation}
          </h2>
          <p className="contact-description">
            {t.contactDescription}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.fullName}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t.emailAddress}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t.phoneNumber}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">{t.serviceInterestedIn}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t.selectService}</option>
                  <option value="consultation">{t.generalConsultation}</option>
                  <option value="cosmetic">{t.cosmeticDentistry}</option>
                  <option value="orthodontics">{t.orthodontics}</option>
                  <option value="surgery">{t.oralSurgery}</option>
                  <option value="pediatric">{t.pediatricDentistry}</option>
                  <option value="emergency">{t.emergencyCare}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                {t.scheduleAppointment}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
