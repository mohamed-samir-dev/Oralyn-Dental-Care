import React from 'react';
import './Analysis.css';
import { useCounter } from '../../hooks/useCounter';
import { STATISTICS_CONFIG } from '../../constants';

export const Analysis: React.FC = () => {
  const happyPatients = useCounter(STATISTICS_CONFIG.happyPatients);
  const yearsExperience = useCounter(STATISTICS_CONFIG.yearsExperience);
  const successRate = useCounter(STATISTICS_CONFIG.successRate);
  return (
    <section className="analysis-section">
      <div className="analysis-content">
        <h2 className="analysis-title">Trusted &Proven</h2>
        <p className="analysis-text">
          Our commitment to excellence has earned us the trust of patients
          across the community. With state-of-the-art technology and
        </p>
      </div>
      <div className="analysis-stats">
        <div className="stat-card">
          <div className="stat-number">{happyPatients}+</div>
          <div className="stat-label">Happy Patients</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{yearsExperience}+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{successRate}%</div>
          <div className="stat-label">Success Rate</div>
        </div>
      </div>
    </section>
  );
};
