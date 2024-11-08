"use client";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("header.link")}</h1>
    </div>
  );
};

export default Hero;
