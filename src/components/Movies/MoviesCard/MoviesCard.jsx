import "./MoviesCard.css";
import {React,useState} from "react";
export default function MoviesCard({card,liked,handleDeleteCard,handleEditLikeCardClick}){
    const [like, setLike] = useState(liked);
    const serverUrl="https://api.nomoreparties.co"
    const calculationMovieTime=(time)=>{
        const hours=Math.ceil(time/60)-1;
        const minutes=time-hours*60;
        
        if(hours === 0){
            return `${minutes}м`
        }
        
        return `${hours}ч${minutes}м`
    }  
    
      const likeCard=()=>{
        handleEditLikeCardClick(card)
        setLike(true)
      }
     
      const handleClickDelete=()=>{
       handleDeleteCard(card);
        setLike(false)
      }

    return(
    <div className="card">
       <a href={card.trailerLink} target="_blank"><img  className="card__photography" src={serverUrl+card.image.url} alt={card.nameRU}></img></a>
       <div className="card__container">
       <h2 className="card__title">{card.nameRU}</h2>
       <button className={like ? "card__button-active" : "card__button"} onClick={()=>like ? handleClickDelete() : likeCard()}></button>
       </div>
       <p className="card__movie-time">{calculationMovieTime(card.duration)}</p>
       
    </div>)
}