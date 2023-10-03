import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import NavTab from "./NavTab/NavTab";
import { React } from "react";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import "./Main.css";
export default function Main({isLoggetIn}) {
  return (
    <>
      <div className="main__header">
        <Header
          element={
            <div className="header__buttons">
              <NavLink className="header__register-button" to="/register">
                Регистрация
              </NavLink>
              <NavLink to="/login">
                <button className="header__login-button">Войти</button>
              </NavLink>
            </div>
          }
          isLoggetIn={isLoggetIn}
        />
      </div>
      <AboutProject />
      <Promo />
      <Techs />
      <Portfolio />
      <NavTab />
      <Footer />
    </>
  );
}
