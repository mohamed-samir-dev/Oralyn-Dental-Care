import React from 'react';
import './Analysis.css';
import { useCounter } from '../../hooks/useCounter';
import { STATISTICS_CONFIG } from '../../constants';
import { useLanguage } from '../../contexts/useLanguage';
import { translations } from '../../constants/translations';

export const Analysis: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const happyPatients = useCounter(STATISTICS_CONFIG.happyPatients);
  const yearsExperience = useCounter(STATISTICS_CONFIG.yearsExperience);
  const successRate = useCounter(STATISTICS_CONFIG.successRate);
  
  return (
    <section className="analysis-section">
      <div className="analysis-content">
        <h2 className="analysis-title">{t.trustedProven}</h2>
        <p className="analysis-text">
          {t.trustDescription}
        </p>
      </div>
      <div className="analysis-stats">
        <div className="stat-card">
          <div className="stat-number">{happyPatients}+</div>
          <div className="stat-label">{t.happyPatients}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{yearsExperience}+</div>
          <div className="stat-label">{t.yearsExperience}</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{successRate}%</div>
          <div className="stat-label">{t.successRate}</div>
        </div>
      </div>
    </section>
  );
};
