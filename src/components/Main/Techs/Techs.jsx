import "./Techs.css";
export default function Techs() {
  return (
   <div className="techs" name="techs">
    <h2 className="techs__named">Технологии</h2>
    <h3 className="techs__title">7 технологий</h3>
    <h3 className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
    <div className="techs__cells">
         <div className="techs__cell">HTML</div>
         <div className="techs__cell">CSS</div>
         <div className="techs__cell">JS</div>
         <div className="techs__cell">React</div>
         <div className="techs__cell">Git</div>
         <div className="techs__cell">Express.js</div>
         <div className="techs__cell">mongoDB</div>
    </div>
   </div>
  );
}