import "./SearchForm.css";
import lupa from "../../../images/search-form/lupa.svg";
import selector from "../../../images/search-form/smalltumb.svg";
export default function SearchForm() {
  
  return (
    <div className="search-form">
      <div className="search-form__group-left">
      <img className="search-form__lupa" src={lupa} alt="кнопка"/>
      <input
          type="text"
          className="search-form__input"
          placeholder="Фильмы"
        ></input>
        <button className=" search-form__button1"></button>
      </div>
      <div className="search-form__group-right">
      <button className="search-form__button2"></button>
        <img className="search-form__switch" src={selector} alt="кнопка"></img>
        <span className="search-form__span">Короткометражки</span>
      </div>
    </div>
  );
}
