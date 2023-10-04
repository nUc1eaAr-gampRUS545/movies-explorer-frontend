import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import UserAuthorization from "../../utils/userAuth";
import React, { useState } from "react";
import Input from "../Input/Input";
export default function Register() {
  const [message,setMessage]=useState('');
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const textError=(message)=>{
     if(message==="Ошибка 409"){
      return "Пользователь с таким email уже существует.";
     }
     if(message==="Ошибка 400"){
      return "При регистрации пользователя произошла ошибка.";
     }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    UserAuthorization.registr(formValue)
      .then((data) => {
        console.log(data)
        setMessage(data);
        navigate("/login");
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
          value={formValue.name}
          message={message}
          onChange={handleChange}
        ></Input>
        <p className="register__caption">E-mail</p>
        <Input
           type="email"
           name="email"
           message={message}
           onChange={handleChange}
           value={formValue.email}
        ></Input>
        <p className="register__caption">Пароль</p>
        <Input
           type="password"
           name="password"
           message={message}
           value={formValue.password}
           onChange={handleChange}
           required
        ></Input>
     <div className="register__input__error">{textError(message)}</div>
      <button className="register__saved" type="submit">
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
