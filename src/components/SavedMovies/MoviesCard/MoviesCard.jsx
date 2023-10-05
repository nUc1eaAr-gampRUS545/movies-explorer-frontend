import "./MoviesCard.css";
export default function MoviesCard({card,saveFilm}){
    const serverUrl="https://api.nomoreparties.co"
    /* <div className="card">
       <img  className="card__photography" src={card.photo} alt="Постер фильма"></img>
       <div className="card__container">
       <h2 className="card__title">{card.name}</h2>
       <button className="card__button-delete"></button>
       </div>
       <p className="card__movie-time">{card.time}</p>
    </div>*/
    const calculationMovieTime=(time)=>{
        const hours=Math.ceil(time/60)-1;
        const minutes=time-hours*60;
        if(hours === 0){
            return `${minutes}м`
        }
        
        return `${hours}ч${minutes}м`
    }
    return(
        <div className="card">
        <a href={card.trailerLink}><img  className="card__photography" src={serverUrl+card.image.url} alt={card.nameRU}></img></a>
        <div className="card__container">
        <h2 className="card__title">{card.nameRU}</h2>
        <button className="card__button-delete"></button>
        </div>
        <p className="card__movie-time">{calculationMovieTime(card.duration)}</p>
        
     </div>
    )
}