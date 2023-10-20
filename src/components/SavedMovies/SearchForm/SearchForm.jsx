import "./SearchForm.css";
import lupa from "../../../images/search-form/lupa.svg";
import { React, useState } from "react";
import useInput from "../../Validation/Validation";
export default function SearchForm({
  searchInputMovies,
  checkBox,
  clickCheckBox,
}) {
  const [viewStorage, setViewStorage] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const clickButton=(data)=>{
    localStorage.setItem("SMcheckBox", data);
    searchInputMovies(input.value);
    clickCheckBox(data)
  }
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const input = useInput("", {});
  return (
    <div className="section">
      <div className="search-form">
        <div className="search-form__group-left">
          <img className="search-form__lupa" src={lupa} alt="кнопка" />
          <input
            type="text"
            className="search-form__input"
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Фильмы"
            onChange={(e) => input.onChange(e.target.value)}
            onBlur={(e) => input.onBlur(e)}
            onFocus={() => setViewStorage(true)}
            value={input.value}
          ></input>
          <button
            className=" search-form__button1"
            onClick={()=>searchInputMovies(input.value)}
          ></button>
        </div>
        <div className="search-form__group-right">
          <button
            className="search-form__button2"
            onClick={()=>searchInputMovies(input.value)}
          ></button>
          <button
            className={
              checkBox ? "search-form__switch" : "search-form__switch-no-active"
            }
            onClick={() =>
              checkBox ? (clickButton(false)) : (clickButton(true))
            }
          ></button>
          <span className="search-form__span">Короткометражки</span>
        </div>
      </div>
      {input.isDirty ? (
        <div
          className={
            input.value === "" ? "errors" : "errors form-hint-no-active"
          }
        >
          Запрос не может быть пустым
        </div>
      ) : (
        <div className={"errors form-hint-no-active"}>
          Запрос не может быть пустым
        </div>
      )}
    </div>
  );
}
