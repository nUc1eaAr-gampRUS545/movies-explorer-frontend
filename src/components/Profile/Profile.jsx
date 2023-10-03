import Header from "../Header/Header";
import "./Profile.css";
import { user } from "../../utils/constatns";
import { NavLink } from "react-router-dom";
export default function Profile({...props}){
    return(
     <>
    <Header {...props}/>
   <div className="profile">
     <h2 className="profile__title">Привет,{user.name}!</h2>
     <div className="profile__info">
        <div className="profile__info__cell1 " >
        <span className="profile__info__cell__span">Имя</span>
        <span className="profile__info__cell__span" >{user.name}</span>
        </div>
        <div className="profile__info__cell1 profile__info__cell2" border='0' >
        <span className="profile__info__cell__span" >E-mail</span>
        <span className="profile__info__cell__span">{user.mail}</span>
        </div>
        <div className="profile__buttons">
      <button className="profile__button1">Редактировать</button>
      <button className="profile__button2">Выйти из аккаунта</button>
     </div>
     </div>
     </div>
     
    </>)
}