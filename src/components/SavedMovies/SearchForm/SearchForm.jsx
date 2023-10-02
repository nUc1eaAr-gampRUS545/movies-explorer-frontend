import "./SearchForm.css";
import lupa from "../../../images/search-form/lupa.svg";
import {React, useState } from "react";
export default function SearchForm() {
  const [switchButton,setSwitchButton]=useState(false);
  return (
    <div className="search-form">
      <form className="search-form__group-left">
      <img className="search-form__lupa" src={lupa} alt="кнопка"/>
      <input
          type="text"
          className="search-form__input"
          placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Фильмы"
        ></input>
        <button className=" search-form__button1"></button>
      </form>
      <div className="search-form__group-right">
      <button className="search-form__button2"></button>
      <button className={switchButton ? "search-form__switch" : "search-form__switch__no-active"} onClick={()=>setSwitchButton(true)} ></button>
        <span className="search-form__span">Короткометражки</span>
      </div>
    </div>
  );
}
