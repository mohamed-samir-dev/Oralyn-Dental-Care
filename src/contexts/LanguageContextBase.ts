import { createContext } from "react";

export type Language = "en" | "ar";

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isArabic: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
