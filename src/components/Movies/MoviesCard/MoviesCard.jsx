import "./MoviesCard.css";
import {React,useState} from "react";
export default function MoviesCard({card}){
    const [like,setLike]=useState(false)
    return(
    <div className="card">
       <img  className="card__photography" src={card.photo} alt="Постер фильма"></img>
       <div className="card__container">
       <h2 className="card__title">{card.name}</h2>
       <button className={like ? "card__button-active" : "card__button"} onClick={()=>setLike(true)}></button>
       </div>
       <p className="card__movie-time">{card.time}</p>
       
    </div>)
}