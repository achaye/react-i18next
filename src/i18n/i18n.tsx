import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import deTranslation from "./languages/de.json";
import enTranslation from "./languages/en.json";
import frTranslation from "./languages/fr.json";
import itTranslation from "./languages/it.json";

const supportedLanguages = ["de", "en", "fr", "it"];

const translationResources = {
  de: {
    translation: { ...deTranslation },
  },
  en: {
    translation: { ...enTranslation },
  },
  fr: {
    translation: { ...frTranslation },
  },
  it: {
    translation: { ...itTranslation },
  },
};
const optionsLanguageDetector = {
  // order and from where user language should be detected
  order: ["querystring", "htmlTag"],

  // keys or params to lookup language from
  lookupQuerystring: "lang",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translationResources,
    detection: optionsLanguageDetector,
    whitelist: supportedLanguages,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    keySeparator: false, // this value is important because we use '.'s in our keys
  });

export default i18n;
