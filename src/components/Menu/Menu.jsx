import "./Menu.css";
import { NavLink } from "react-router-dom";
export default function Menu({closeMenu}){
    

    return(<>
        <button className="menu__exit" onClick={closeMenu}></button>
        <div className="menu">
            
            <h2 className="menu__title">Главная</h2>
                        <NavLink to="/movies" className="menu__link" onClick={closeMenu}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className="menu__link" onClick={closeMenu}>Сохранённые фильмы</NavLink>
            <NavLink to="/profile"><button className="menu__acaunt" onClick={closeMenu}>Аккаунт</button></NavLink>
            <div className="menu__icon"></div>
        </div></>
    )
}