import "./Register.css";
import { NavLink } from "react-router-dom";

export default function Register(){
    return(
     
    <div className="register">
      <div className="register__logo"></div>
      <div className="register__title">Добро пожаловать!</div>
      <div className="register__container">
      <p className="register__caption">Имя</p>
        <input className="register__input"></input>
        <p className="register__caption">E-mail</p>
        <input className="register__input"></input>
        <p className="register__caption">Пароль</p>
        <input className="register__input"></input>
      </div>
      <button className="register__saved">Войти</button>
      <div className="register__info">
        <span className="register__span">Уже зарегистрированы?</span>
        <NavLink className="register__registr-link" to="/login">Войти</NavLink>
      </div>
    </div>
    )
}