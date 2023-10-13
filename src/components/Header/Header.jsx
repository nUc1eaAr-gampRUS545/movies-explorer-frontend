import "./Header.css";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
export default function Header({isLoggetIn,closeMenu, openMenu,flag }) {
  return isLoggetIn ? (<>
   
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo"></NavLink>
        
      </div>
      <div className="header__buttons">
        <NavLink className="header__register-button" to="/register">
          Регистрация
        </NavLink>
        
        <NavLink to="/login">
          <button className="header__login-button">Войти</button>
        </NavLink>
      </div>
    </header>
    </>) : (
      <>
    {flag && <Menu closeMenu={closeMenu} className="header__menu-icon"/> }
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo"></NavLink>
        <NavLink to="/movies" className="header__link">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="header__link">
          Сохранённые фильмы
        </NavLink>
      </div>
      <div className="header__buttons">
        <button className="header__menu-icon" onClick={openMenu}></button>
      <NavLink to="/profile">
              <button className="header__acaunt">Аккаунт</button>
            </NavLink>
      </div>
    </header>
  </>);
}
