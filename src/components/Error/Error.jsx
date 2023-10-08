import "./Error.css";
import { NavLink } from "react-router-dom";
export default function Error(){
    return(<div className="error">
        <div className="error__number">404</div>
        <div className="error__message">Страница не найдена</div>
        <NavLink className="error__out" to="/">Назад</NavLink>
    </div>)
}