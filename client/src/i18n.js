import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

i18n.use(initReactI18next).init({
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  resources: {
    en: {
      translation: enTranslation,
    },
    fr: {
      translation: frTranslation,
    },
  },
});

export default i18n;
