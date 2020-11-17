import React from "react";

// Localization
import { useTranslation } from "react-i18next";

const AppNext: React.FC<any> = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div id="App">
      <button onClick={() => changeLanguage("de")}>DE</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("fr")}>FR</button>
      <button onClick={() => changeLanguage("it")}>IT</button>
      <h1>Hello i18n</h1>
      <hr />
      <div>{t("key.number.one")}</div>
    </div>
  );
};

export default AppNext;
