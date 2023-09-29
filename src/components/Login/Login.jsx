import "./Login.css";
import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import UserAuthorization from "../../utils/userAuth";
import Preloader from "../Movies/Preloader/Preloader";
export default function Login({handleLogged}) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleChange=(evt)=>{
    const {name,value}=evt.target;
    setFormValue({...formValue,[name]:value})
  }
  const handleSubmit=(evt)=>{
    evt.preventDefault();
    UserAuthorization.authorization(formValue).then((data)=>{
      handleLogged();
      navigate("/");
      console.log(data)
    }).catch((err)=>{
      console.error(err)
    }).finally(()=><Preloader/>)
  }
  return (
   
    <div className="login">
      <div className="login__logo"></div>
      <div className="login__title">Рады видеть!</div>
      <form className="login__container" onSubmit={handleSubmit}>
        <p className="login__caption">E-mail</p>
        <input className="login__input" type="email" name="email" required onChange={handleChange}></input>
        <p className="login__caption">Пароль</p>
        <input className="login__input" type="password" name="password" required onChange={handleChange}></input>
      
      <button className="login__saved" type="submit">Войти</button></form>
      <div className="login__info">
        <span className="login__span">Ещё не зарегистрированы?</span>
        <NavLink className="login__register" to="/register">Регистрация</NavLink>
      </div>
    </div>
    
  );
}
