import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <select
      onChange={handleChangeLanguage}
      style={{
        borderRadius: "10px",
        height: "40px",
        border: "2px solid pink",
      }}
    >
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  );
}

export default LanguageSelector;
