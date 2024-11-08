"use client";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t("header.link")}</h1>
      <div className="flex space-x-2">
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <button onClick={() => i18n.changeLanguage("ky")}>ky</button>
        <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
      </div>
    </div>
  );
};

export default Header;
