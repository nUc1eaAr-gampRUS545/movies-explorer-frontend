import Header from "../Header/Header";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import api from "../../utils/MainApi";
import useInput from "../Validation/Validation";
import {useState } from "react";
export default function Profile({ isUserData, ...props }) {
  const navigate = useNavigate();
  let email = useInput(`${isUserData.email}`, { isEmpty: true, minLength: 6, isEmail: false });
  let name = useInput(`${isUserData.name}`, { isEmpty: true, minLength: 4, name: false });
  const formObject = {
    name: name.formValue,
    about: email.formValue,
  };
  const [save, setSave] = useState(false);
  const [onFocusInput,setOnFocusInput]= useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    api.updateUserInfo(formObject).then((data) => {
      props.setUserData(data);
      setSave(true);
      setTimeout(() => setSave(false), 3000);
    });
   
  };


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
        <form className="profile__info" onSubmit={e=>handleSubmit(e)}>
          <div className="profile__info-cell ">
            <span className="profile__info-cell-span">Имя</span>
            
              <input
                className="profile__info-cell-input"
                name="name"
                onBlur={(e) =>{setOnFocusInput(false);return name.onBlur(e)}}
                onChange={(e) => name.onChange(e.target.value)}
                type="text"
                onFocus={()=>setOnFocusInput(true)}
                value={name.value}
              ></input>
            
          </div>
          <div className="profile__info-cell profile__info-cell-no-border">
            <span className="profile__info-cell-span">E-mail</span>
           
              <input
                className="profile__info-cell-input"
                type="text"
                onBlur={e=>{setOnFocusInput(false);return email.onBlur(e)}}
                onFocus={()=>setOnFocusInput(true)}
                onChange={(e) => email.onChange(e.target.value)}
                name="about"
               
                value={email.value}
              ></input>
          
          </div>
          <div className="profile__buttons">
            {
              <div className={save ? "message" : "message message-no-active"}>
                Профиль успешно обновлён!
              </div>
            }
              <div className={(name.value == isUserData.name && email.value == isUserData.email) && onFocusInput ? "profile__button1" : "profile__button1 profile__button1-no-active "}>Данные не измененны!</div>
            
            {  
              <button
              className={
                email.inputValid && name.inputValid && (name.value !== isUserData.name )
                  ? "profile__button1 "
                  : "profile__button1 profile__button1-no-valid "
              }
                
                type="submit"
                disabled={email.inputValid && name.inputValid && (name.value !== isUserData.name )  ? false : true}
                
              >
                Редактировать
              </button>
            }
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
/**redaction ? (
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
            ) */