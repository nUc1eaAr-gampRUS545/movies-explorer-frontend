
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList({films}){
    return(<div className="card-list">
        {films.map(card=>
        <MoviesCard card={card} />)}
    </div>)
}