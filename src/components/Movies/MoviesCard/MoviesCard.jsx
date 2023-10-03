import "./MoviesCard.css";
import {React,useState} from "react";
import apiSavedMovies from "../../../utils/MainApi";
export default function MoviesCard({card,isLoading}){
    const saveFilm=(data)=>{
        apiSavedMovies.savedMovies(data)
      }
    const serverUrl="https://api.nomoreparties.co"
    const [like,setLike]=useState(false);
    const calculationMovieTime=(time)=>{
        const hours=Math.ceil(time/60)-1;
        const minutes=time-hours*60;
        if(hours == 0){
            return `${minutes}м`
        }
        
        return `${hours}ч${minutes}м`
    }
    const likeCard=(data)=>{
        saveFilm(data);
        setLike(true);
    }
    return(
    <div className="card">
       <a href={card.trailerLink}><img  className="card__photography" src={serverUrl+card.image.url} alt={card.nameRU}></img></a>
       <div className="card__container">
       <h2 className="card__title">{card.nameRU}</h2>
       <button className={like ? "card__button-active" : "card__button"} onClick={()=>{likeCard(card)}}></button>
       </div>
       <p className="card__movie-time">{calculationMovieTime(card.duration)}</p>
       
    </div>)
}