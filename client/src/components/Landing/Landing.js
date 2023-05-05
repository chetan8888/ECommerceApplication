import "./Landing.css";
import land from "../../asset/brand/men2.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="landing__container">
      <div className="landing__header__container">
        <div className="landing__header">
          <h3 className="landing__header__discount">{t("Discount")}</h3>
          <h1 className="landing__header__main">{t("MainTitle")}</h1>
          <Link to="/shop">
            <Button
              variant="outlined"
              sx={[
                {
                  width: "190px",
                  height: "50px",
                  borderRadius: "20px",
                  fontWeight: "700",
                  backgroundColor: "none",
                  borderColor: "black",
                  color: "black",
                },
                {
                  "&:hover": {
                    backgroundColor: "black",
                    color: "pink",
                    borderColor: "black",
                  },
                },
              ]}
            >
              {t("SHOPNOW")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="landing__image__container">
        <img className="landing__image" src={land} alt="" />
      </div>
    </div>
  );
};

export default Landing;
