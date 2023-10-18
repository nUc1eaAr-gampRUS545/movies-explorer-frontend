import Header from "../Header/Header";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import api from "../../utils/MainApi";
import useInput from "../Validation/Validation";
import { useState } from "react";
export default function Profile({ isUserData, ...props }) {
  const navigate = useNavigate();
  let email = useInput(`${isUserData.email}`, { isEmpty: true, minLength: 6, isEmail: false });
  let name = useInput(`${isUserData.name}`, { isEmpty: true, minLength: 4, name: false });
  const formObject = {
    name: name.formValue,
    email: email.formValue,
  };
  const [save, setSave] = useState(false);
  const handleSubmit = () => {
    api.updateUserInfo(formObject).then((data) => {
      props.setUserData(data);
      setSave(true);
      setTimeout(() => setSave(false), 3000);
    });
    setRedaction(false);
  };
  const [redaction, setRedaction] = useState(false);

  const clearCookey = () => {
    localStorage.clear();
    api.signOut().then(() => {
      props.setLoggedIn(false);
      navigate("/");
    });
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
                onChange={(e) => name.onChange(e.target.value)}
                type="text"
                value={redaction ? name.value : `${isUserData.name}`}
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
                onChange={(e) => email.onChange(e.target.value)}
                name="about"
                value={redaction ? email.value : `${isUserData.email}`}
              ></input>
            ) : (
              <span className="profile__info-cell-input">
                {isUserData.email}
              </span>
            )}
          </div>
          <div className="profile__buttons">
            {
              <div className={save ? "message" : "message message-no-active"}>
                Профиль успешно обновлён!
              </div>
            }
            {redaction ? (
              name.value === isUserData.name 
               ? (
                <div className="profile__button1">Данные не измененны!</div>
              ) : (
                <button
                  className={
                    email.inputValid && name.inputValid
                      ? "profile__button1 "
                      : "profile__button1 profile__button1-no-valid "
                  }
                  type="button"
                  disabled={email.inputValid || name.inputValid ? false : true}
                  onClick={handleSubmit}
                >
                  Сохранить
                </button>
              )
            ) : (
              <button
                className="profile__button1"
                onClick={() => setRedaction(true)}
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
