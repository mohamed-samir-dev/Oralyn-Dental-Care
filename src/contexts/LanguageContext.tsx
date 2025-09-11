import React, { useState, useCallback } from "react";
import type { Language } from "./LanguageContextBase";
import { LanguageContext } from "./LanguageContextBase";
import { LanguageMiddleware } from "../middleware/LanguageMiddleware";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageDetected = useCallback((detectedLanguage: Language) => {
    setLanguage(detectedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    // Save user preference
    localStorage.setItem('userLanguagePreference', newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, isArabic: language === "ar" }}
    >
      <LanguageMiddleware onLanguageDetected={handleLanguageDetected}>
        <div dir={language === "ar" ? "rtl" : "ltr"} lang={language}>
          {children}
        </div>
      </LanguageMiddleware>
    </LanguageContext.Provider>
  );
};
