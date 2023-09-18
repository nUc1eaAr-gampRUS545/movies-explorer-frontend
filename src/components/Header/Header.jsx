import "./Header.css";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";

export default function Header({element,closeMenu,flag}) {
  
    return (<>
    {flag && <Menu closeMenu={closeMenu}/> }
        <header className="header">
          <div className="header__container">
            <div className="header__logo"></div>
            <NavLink to="/movies" className="header__link">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__link">Сохранённые фильмы</NavLink>
          </div>
          {element}
        </header></>
    );
  }