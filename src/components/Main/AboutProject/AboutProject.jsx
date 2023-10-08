import { NavLink } from "react-router-dom";
import "./AboutProject.css"
export default function AboutProject() {
    return (   
        <section>
        <div className="about-project">
        <div className="about-project__container">
            <h1 className="about-project__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
        </div>
        <nav className="about-project-nav">
            <NavLink className="about-project-nav__link" to="/error"> О проекте</NavLink >
            <NavLink  className="about-project-nav__link" to="/error"> Технологии</NavLink>
            <NavLink  className="about-project-nav__link" to="/error"> Студент</NavLink>
        </nav>
        </section>
    );
  }