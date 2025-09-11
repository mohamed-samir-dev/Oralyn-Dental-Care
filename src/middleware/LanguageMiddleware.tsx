import React, { useEffect, useState } from 'react';
import { getUserLocation } from '../services/geolocation';
import type { Language } from '../contexts/LanguageContextBase';

interface LanguageMiddlewareProps {
  children: React.ReactNode;
  onLanguageDetected: (language: Language) => void;
}

/**
 * Language Middleware Component
 * Detects user's location and sets appropriate language
 */
export const LanguageMiddleware: React.FC<LanguageMiddlewareProps> = ({
  children,
  onLanguageDetected,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Check if user has manually set a language preference
        const savedLanguage = localStorage.getItem('userLanguagePreference');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
          onLanguageDetected(savedLanguage as Language);
          setIsLoading(false);
          return;
        }

        // Detect location and set language
        const location = await getUserLocation();
        const detectedLanguage: Language = location.isArabicRegion ? 'ar' : 'en';
        
        onLanguageDetected(detectedLanguage);
      } catch (error) {
        console.error('Language detection failed:', error);
        // Fallback to English
        onLanguageDetected('en');
      } finally {
        setIsLoading(false);
      }
    };

    detectLanguage();
  }, [onLanguageDetected]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="dental-loader">
            <div className="tooth-icon">🦷</div>
            <div className="pulse-ring"></div>
          </div>
          <p className="loading-text">Oralyn</p>
        </div>
        <style>{`
          .loading-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }
          .loading-content {
            text-align: center;
            animation: fadeIn 0.5s ease-out;
          }
          .dental-loader {
            position: relative;
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
          }
          .tooth-icon {
            font-size: 40px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: bounce 1.5s ease-in-out infinite;
          }
          .pulse-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 3px solid #000;
            border-radius: 50%;
            animation: pulse 2s ease-in-out infinite;
          }
          .loading-text {
            font-size: 24px;
            font-weight: 600;
            color: #1a202c;
            margin: 0;
            letter-spacing: 2px;
            animation: textGlow 2s ease-in-out infinite alternate;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
            40% { transform: translate(-50%, -50%) translateY(-10px); }
            60% { transform: translate(-50%, -50%) translateY(-5px); }
          }
          @keyframes pulse {
            0% { transform: scale(0.8); opacity: 1; }
            100% { transform: scale(1.2); opacity: 0; }
          }
          @keyframes textGlow {
            from { opacity: 0.7; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return <>{children}</>;
};