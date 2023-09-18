import "./Login.css";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
   
    <div className="login">
      <div className="login__logo"></div>
      <div className="login__title">Рады видеть!</div>
      <div className="login__container">
        <p className="login__caption">E-mail</p>
        <input className="login__input"></input>
        <p className="login__caption">Пароль</p>
        <input className="login__input"></input>
      </div>
      <button className="login__saved">Войти</button>
      <div className="login__info">
        <span className="login__span">Ещё не зарегистрированы?</span>
        <NavLink className="login__register" to="/register">Регистрация</NavLink>
      </div>
    </div>
    
  );
}
