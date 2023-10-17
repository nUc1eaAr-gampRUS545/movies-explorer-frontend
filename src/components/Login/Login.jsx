import "./Login.css";
import React, { useState } from "react";
import useInput from "../Validation/Validation";
import { NavLink, useNavigate } from "react-router-dom";
import UserAuthorization from "../../utils/userAuth";
import Preloader from "../Movies/Preloader/Preloader";
import Input from "../Input/Input";
export default function Login({ handleLogged }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  let email = useInput("", { isEmpty: true, minLength: 6, isEmail: false });
  let password = useInput("", { isEmpty: true, minLength: 3 });
  let formObject = { email: email.formValue, password: password.formValue };
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
    UserAuthorization.authorization(formObject)
      .then((data) => {
        handleLogged();
        setMessage(data);
        navigate('/')
      })
      .catch((err) => {
        setMessage(err);
        console.error(err);
      })
      .finally(() => <Preloader />);
  };
  return (
    <div className="login">
       <NavLink to="/" ><div className="login__logo"></div></NavLink>
      <div className="login__title">Рады видеть!</div>
      <form className="login__container" onSubmit={handleSubmit}>
        <p className="login__caption">E-mail</p>
        <Input
          type="email"
          name="email"
          message={message}
          onChange={(e) => email.onChange(e.target.value)}
          onBlur={(e) => email.onBlur(e)}
          value={email.value}
        ></Input>
        {email.isEmailError && email.value !== "" && (
          <div className="login__input-error ">Неверная электронная почта</div>
        )}

        <p className="login__caption">Пароль</p>
        <Input
          type="password"
          name="password"
          message={message}
          value={password.value}
          onChange={(e) => password.onChange(e.target.value)}
        ></Input>
        {password.minLengthError && email.value !== "" && (
          <div className="login__input-error ">Неверный формат пороля</div>
        )}
        <div
          className={
            message !== ""
              ? "login__input__error-active login__input__error"
              : "login__input__error"
          }
        >
          {textError(message)}
        </div>
        <button
          className={
            email.inputValid || password.inputValid
              ? "login__saved login__saved-no-active"
              : "login__saved"
          }
          disabled={email.inputValid || password.inputValid ? true : false}
          type="submit"
        >
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
