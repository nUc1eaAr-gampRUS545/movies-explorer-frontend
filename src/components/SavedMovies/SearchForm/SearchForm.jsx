import "./SearchForm.css";
import lupa from "../../../images/search-form/lupa.svg";
import { React, useState } from "react";
export default function SearchForm({searchInputMovies, checkBox, clickCheckBox}) {
  const [switchButton, setSwitchButton] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const saveSearchInput = () => {
    let oneSimvol = searchInput.charAt(0).toUpperCase();
    searchInputMovies(`${oneSimvol}${searchInput.slice(1)}`);
  };
  return (
    <div className="search-form">
      <form className="search-form__group-left">
        <img className="search-form__lupa" src={lupa} alt="кнопка" />
        <input
          type="text"
          className="search-form__input"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Фильмы"
          required
        ></input>
        <button
          className=" search-form__button1"
          onClick={saveSearchInput}
        ></button>
      </form>
      <div className="search-form__group-right">
        <button
          className="search-form__button2"
          onClick={saveSearchInput}
        ></button>
        <button
          className={
            checkBox
              ? "search-form__switch"
              : "search-form__switch-no-active"
          }
          onClick={() => checkBox ? clickCheckBox(false) : clickCheckBox(true)}
        ></button>
        <span className="search-form__span">Короткометражки</span>
      </div>
    </div>
  );
}
