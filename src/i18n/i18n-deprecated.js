import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import deTranslation from "./de";
import enTranslation from "./en";
import frTranslation from "./fr";
import itTranslation from "./it";

// TODO: refactor this part - get list from ENV
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
  // TODO: ...
  order: [
    "querystring",
    "cookie",
    // 'localStorage',
    // 'navigator',
    "htmlTag",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lang",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",

  // TODO: cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // TODO: optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translationResources,
    fallbackLng: "de",
    whitelist: supportedLanguages,
    debug: true,

    keySeparator: false, // this value is important because we use '.'s in our keys

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: optionsLanguageDetector,
  });

export default i18n;
