import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en/translations.json";
import csTranslation from "./cs/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    cs: {
      translation: csTranslation,
    },
  },
});

i18n.languages = ["en", "cs"];

export default i18n;
