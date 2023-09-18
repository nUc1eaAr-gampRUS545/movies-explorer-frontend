import "./MoviesCard.css";
export default function MoviesCard({card}){
    return(
    <div className="card">
       <img  className="card__photography" src={card.photo} alt="Постер фильма"></img>
       <h2 className="card__title">{card.name}</h2>
       <p className="card__movie-time">{card.time}</p>
    </div>)
}