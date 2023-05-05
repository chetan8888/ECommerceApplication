import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Form.css";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext";
import { useTranslation } from "react-i18next";

const Form = () => {
  const { t } = useTranslation();
  const [searchInput, setSearchInput] = useState("");
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  const handelChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    searchContext.setSearchQuery(searchInput);
    navigate("/search");
  };

  return (
    <form className="search__form" onSubmit={handelFormSubmit}>
      <input
        type="text"
        placeholder={t("search")}
        className="search__form__input"
        value={searchInput}
        onChange={handelChange}
        required
      />
      <button className="search__form__button" type="submit">
        <SearchIcon fontSize="medium" />
      </button>
    </form>
  );
};

export default Form;
