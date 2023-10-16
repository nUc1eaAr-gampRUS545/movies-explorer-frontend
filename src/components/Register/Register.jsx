import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import UserAuthorization from "../../utils/userAuth";
import useInput from "../Validation/Validation";
import React, { useState } from "react";
import Input from "../Input/Input";
import api from "../../utils/MainApi";
export default function Register({handleLogged}) {
  const [message,setMessage]=useState('');
  let email=useInput('',{isEmpty:true,minLength:6,isEmail:false});
  let password=useInput('',{isEmpty:true,minLength:4});
  let name=useInput('',{isEmpty:true,minLength:4,name:false});
  const formObject={
    name: name.formValue,
    email: email.formValue,
    password:password.formValue,
  };
  const formObjectAutorization={
    email: email.formValue,
    password:password.formValue,
  };
  const navigate = useNavigate();
  const textError=(message)=>{
     if(message==="Ошибка 409"){
      return "Пользователь с таким email уже существует.";
     }
     if(message==="Ошибка 400"){
      return "При регистрации пользователя произошла ошибка.";
     }
  }
  const authorization=()=>{
    handleLogged();
    UserAuthorization.authorization(formObjectAutorization);
    
   
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    UserAuthorization.registr(formObject)
      .then((data) => {
        setMessage(data);
        authorization();

      })
      .catch((err) => {
        setMessage(err);
        console.log(err);
      })
      .finally(() => {});
  };
  return (
    <div className="register">
      <div className="register__logo"></div>
      <div className="register__title">Добро пожаловать!</div>
      <form className="register__container" onSubmit={handleSubmit}>
        <p className="register__caption">Имя</p>
        <Input
          type="text"
          name="name"
          value={name.value}
          message={message}
          onChange={e=>name.onChange(e.target.value)}
        ></Input>
        {(name.nameError && name.value!=="") &&<div className="register__input-error" >Поле name содержит только латиницу, кириллицу, пробел или дефис.</div>}
        <p className="register__caption">E-mail</p>
        <Input
           type="email"
           name="email"
           message={message}
           onChange={e=>email.onChange(e.target.value)}
           value={email.value}
        ></Input>
        {(email.isEmailError && email.value!=="") &&<div className="register__input-error" style={{color:"red"}}>Неверная электронная почта</div>}
        <p className="register__caption">Пароль</p>
        <Input
           type="password"
           name="password"
           message={message}
           value={password.value}
           onChange={e=>password.onChange(e.target.value)}
        ></Input>
        {(password.minLengthError && password.value!=="") &&<div className="register__input-error">Неверный формат пороля</div>}
     <p className="register__input-error">{textError(message)}</p>
     <button className={email.inputValid || password.inputValid || name.inputValid ? "register__saved register__saved-no-active" : "register__saved"} disabled={email.inputValid || password.inputValid ? true :false}  type="submit" >
        Зарегестрироваться
      </button> </form>
      <div className="register__info">
        <span className="register__span">Уже зарегистрированы?</span>
        <NavLink className="register__registr-link" to="/login">
          Войти
        </NavLink>
      </div>
    </div>
  );
}
