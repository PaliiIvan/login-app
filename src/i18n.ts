import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./utils/translations";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: translations,
});

export default i18n;
