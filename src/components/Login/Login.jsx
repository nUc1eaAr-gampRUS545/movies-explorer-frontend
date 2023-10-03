import "./Login.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserAuthorization from "../../utils/userAuth";
import Preloader from "../Movies/Preloader/Preloader";
import Input from "../Input/Input";
export default function Login({ handleLogged }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const [message, setMessage] = useState("");
  const textError = (message) => {
    if (message === "Ошибка 401") {
      return "Вы ввели неправильный логин или пароль.";
    }
    if (message === "Ошибка 400") {
      return "При регистрации пользователя произошла ошибка.";
    }
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    UserAuthorization.authorization(formValue)
      .then((data) => {
        console.log(data);
        handleLogged();
        navigate("/");
        setMessage(data);
      })
      .catch((err) => {
        setMessage(err);
        console.error(err);
      })
      .finally(() => <Preloader />);
  };
  return (
    <div className="login">
      <div className="login__logo"></div>
      <div className="login__title">Рады видеть!</div>
      <form className="login__container" onSubmit={handleSubmit}>
        <p className="login__caption">E-mail</p>
        <Input
          type="email"
          name="email"
          message={message}
          onChange={handleChange}
          value={formValue.email}
        ></Input>
        <p className="login__caption">Пароль</p>
        <Input
          type="password"
          name="password"
          message={message}
          value={formValue.password}
          onChange={handleChange}
        ></Input>
        <div
          className={
            message !== ""
              ? "login__input__error-active login__input__error"
              : "login__input__error"
          }
        >
          {textError(message)}
        </div>
        <button className="login__saved" type="submit">
          Войти
        </button>
      </form>
      <div className="login__info">
        <span className="login__span">Ещё не зарегистрированы?</span>
        <NavLink className="login__register" to="/register">
          Регистрация
        </NavLink>
      </div>
    </div>
  );
}
