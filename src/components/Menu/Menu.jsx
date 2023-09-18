import "./Menu.css";
import { NavLink } from "react-router-dom";
export default function Menu({ closeMenu }) {
  return (
    <div className="menu">
      <button className="menu__exit" onClick={closeMenu}></button>
      <div className="menu__container">
      <NavLink className="menu__link" to="/">Главная</NavLink>
        <NavLink to="/movies" className="menu__link" onClick={closeMenu}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className="menu__link" onClick={closeMenu}>
          Сохранённые фильмы
        </NavLink>
        <NavLink to="/profile">
          <button className="menu__acaunt" onClick={closeMenu}>
            Аккаунт
          </button>
        </NavLink>
        <div className="menu__icon"></div>
      </div>
    </div>
  );
}
