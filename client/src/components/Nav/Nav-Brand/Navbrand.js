import "./NavBrand.css";
import { Link } from "react-router-dom";
import LanguageSelector from "../../../langSelector";
import { useTranslation } from "react-i18next";

const NavBrand = () => {
  const { t } = useTranslation();
  return (
    <div href="#home" className="navbrand__container">
      <h1 className="navbrand">
        <Link to="/">{t("websiteName")}</Link>
      </h1>
      <LanguageSelector />
    </div>
  );
};

export default NavBrand;
