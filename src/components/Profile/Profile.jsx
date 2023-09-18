import Header from "../Header/Header";
import "./Profile.css";
import { user } from "../../utils/constatns";
import { NavLink } from "react-router-dom";
export default function Profile({ openMenu, closeMenu, flag }){
    return(
     <>
    <Header
        element={
          <>
            <NavLink to="/profile">
              <button className="header__acaunt" onClick={closeMenu}>Аккаунт</button>
            </NavLink>
            <button className="header__menu-icon" onClick={openMenu}></button>
          </>
        } closeMenu={closeMenu} flag={flag}
      />
   <div className="profile">
     <h2 className="profile__title">Привет,{user.name}!</h2>
     <div className="profile__info">
        <div className="profile__info__cell " >
        <span className="profile__info__cell__span">Имя</span>
        <span className="profile__info__cell__span" >{user.name}</span>
        </div>
        <div className="profile__info__cell" border='0' >
        <span className="profile__info__cell__span" >E-mail</span>
        <span className="profile__info__cell__span">{user.mail}</span>
        </div>

     </div>
     </div>
    </>)
}