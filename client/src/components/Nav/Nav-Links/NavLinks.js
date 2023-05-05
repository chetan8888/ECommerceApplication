import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavLinks.css";

const NavLinks = () => {
  const { t } = useTranslation();
  return (
    <nav className="nav__bottom__container">
      <div className="bottom__container">
        <ul className="nav">
          <li className="nav-link">
            <Link to="/">{t("home")}</Link>
          </li>
          <li className="nav-link">
            <Link to="/shop">{t("shop")}</Link>{" "}
          </li>
          <li className="nav-link">
            <Link to="/category/men">{t("men")}</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/women">{t("women")}</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/kids">{t("kids")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;
