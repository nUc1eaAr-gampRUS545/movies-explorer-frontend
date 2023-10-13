import Header from "../Header/Header";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import api from "../../utils/MainApi";

import { useState } from "react";
export default function Profile({ isUserData, ...props }) {
  const [formValue, setFormValue] = useState({
    about:`${isUserData.email}`,
    
    name: `${isUserData.name}`,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = () => {
    api.updateUserInfo(formValue);
    setRedaction(false)
  };
  const [redaction, setRedaction] = useState(false);
  const navigate = useNavigate();
  const clearCookey = () => {
    api.signOut();
    navigate("/login");
    props.setLoggedIn(false)
  };

  return (
    <>
      <Header {...props} />
      <div className="profile">
        <h2 className="profile__title">Привет,{isUserData.name}!</h2>
        <form className="profile__info" onSubmit={handleSubmit}>
          <div className="profile__info-cell ">
            <span className="profile__info-cell-span">Имя</span>
            {redaction ? (
              <input
                className="profile__info-cell-input"
                name="name"
                onChange={handleChange}
                type="text"
                value={redaction ? formValue.name : `${isUserData.name}`}
              ></input>
            ) : (
              <span className="profile__info-cell-input">
                {isUserData.name}
              </span>
            )}
          </div>
          <div className="profile__info-cell profile__info-cell-no-border">
            <span className="profile__info-cell-span">E-mail</span>
            {redaction ? (
              <input
                className="profile__info-cell-input"
                type="text"
                onChange={handleChange}
                name="email"
                value={redaction ? formValue.email : `${isUserData.email}`}
              ></input>
            ) : (
              <span className="profile__info-cell-input">
                {isUserData.email}
              </span>
            )}
          </div>
          <div className="profile__buttons">
            {redaction ? (
              <button className="profile__button1" type="button" onClick={handleSubmit}>
                Сохранить
              </button>
            ) : (
              <button
                className="profile__button1"
                onClick={() =>  setRedaction(true)}
                type="button"
              >
                Редактировать
              </button>
            )}
            <button
              className="profile__button2"
              type="button"
              onClick={clearCookey}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
