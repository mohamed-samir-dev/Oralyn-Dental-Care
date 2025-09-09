import React, { useState } from "react";
import type { Language } from "./LanguageContextBase";
import { LanguageContext } from "./LanguageContextBase";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, isArabic: language === "ar" }}
    >
      <div dir={language === "ar" ? "rtl" : "ltr"} lang={language}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
