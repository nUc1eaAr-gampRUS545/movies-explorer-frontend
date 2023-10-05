import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";
import Portfolio from "./Portfolio/Portfolio";
import NavTab from "./NavTab/NavTab";
import { React } from "react";
import Footer from "../Footer/Footer";
import "./Main.css";  
export default function Main({...props}) {
  return (
    <>
      <div className="main-top">
        <Header  {...props}/>
      </div>
      <main>
      <AboutProject />
      <Promo />
      <Techs />
      <Portfolio />
      <NavTab />
      </main>
      <Footer />
    </>
  );
}
