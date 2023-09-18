import "./AboutProject.css"
export default function AboutProject() {
    return (   
        <>
        <div className="about-project">
        <div className="about-project__container">
            <h1 className="about-project__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
        </div>
        <nav className="about-project__nav">
            <a className="about-project__nav__link" href="#"> О проекте</a>
            <a className="about-project__nav__link" href="#techs"> Технологии</a>
            <a className="about-project__nav__link" href="#student"> Студент</a>
        </nav>
        </>
    );
  }