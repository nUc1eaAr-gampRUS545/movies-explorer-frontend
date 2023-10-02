import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import UserAuthorization from "../../utils/userAuth";
import React, { useState } from "react";
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
        <input
          className="register__input"
          name="name"
          value={formValue.name}
          onChange={handleChange}
        ></input>
        <p className="register__caption">E-mail</p>
        <input
          className="register__input"
          type="email"
          name="email"
          required
          value={formValue.email}
          onChange={handleChange}
        ></input>
        <p className="register__caption">Пароль</p>
        <input
          className="register__input"
          type="password"
          name="password"
          value={formValue.password}
          required
          onChange={handleChange}
        ></input>
     <span>{message}</span>
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
