
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList({films}){
    return(<section className="card-list">
        {films.map(card=>
        <MoviesCard card={card} />)}
    </section>)
}