import "./SearchForm.css";
import lupa from "../../../images/search-form/lupa.svg";
import useInput from "../../Validation/Validation";
import { React, useEffect, useState } from "react";

export default function SearchForm({
  searchInputMovies,
  checkBox,
  clickCheckBox,
  setCheckStorage,
}) {
  const [viewStorage, setViewStorage] = useState(false);
  const input = useInput("", {});
  useEffect(()=>localStorage.setItem('checking',false),[]);
  
  const saveSearchInput = () => {
    localStorage.setItem('checking',false);
    localStorage.setItem("lastReq", input.value);
    searchInputMovies(input.value);
    setCheckStorage(false)
  };

  const clickCheckbox = (data) => {
    localStorage.setItem("checkBox", data);
    return clickCheckBox(data);
  };


  return (
    <div className="section">
      <section className="search-form">
     
        <div className="search-form__group1">
          <img className="search-form__lupa" src={lupa} alt="кнопка" />
          <input
            type="text"
            className="search-form__input"
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Фильмы"
            onChange={(e) => {setViewStorage(false);return input.onChange(e.target.value)}}
            onBlur={(e) => {setViewStorage(false);return input.onBlur(e)}}
            onFocus={()=>setViewStorage(true)}
            value={input.value}
          ></input>
          <button
            className={
              input.value === "" 
                ? "search-form__button1 search-form__button-no-active"
                : "search-form__button1"
            }
            disabled={input.value === "" ? true : false}
            onClick={saveSearchInput}
          >
            {" "}
          </button>
        </div>
        <div className="search-form__group2">
          <button
            className={
              input.value === "" 
                ? "search-form__button2 search-form__button-no-active"
                : "search-form__button2"
            }
            disabled={input.value === "" ? true : false}
            onClick={saveSearchInput}
          >
            {" "}
          </button>
          <button
            type="button"
            className={
              checkBox ? "search-form__switch" : "search-form__switch-no-active"
            }
            onClick={() => {
              checkBox ? clickCheckbox(false) : clickCheckbox(true);
            }}
          ></button>

          <span className="search-form__span">Короткометражки</span>
        </div>
      
      </section>
      {input.isDirty
        ?  (
            <div className={input.value === "" ? "errors" : "errors form-hint-no-active"}>Запрос не может быть пустым</div>
          )
        : <div className={"errors form-hint-no-active"}>Запрос не может быть пустым</div>}
      {
        <div
          className={
            viewStorage ? "form-hint" : "form-hint-no-active form-hint"
          }>
          <button
            className="storedge-button"
            onClick={() => {
              localStorage.setItem('checking',true);
              setViewStorage(false);
              setCheckStorage(true);
              searchInputMovies('')
              input.onChange(localStorage.getItem("lastReq"))
              
            }}
          >
            {localStorage.getItem("lastReq")}
          </button>
        </div>
      }
    </div>
  );
}
