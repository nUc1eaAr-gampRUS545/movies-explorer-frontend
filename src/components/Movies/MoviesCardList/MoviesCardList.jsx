import { cards } from "../../../utils/constatns";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList(){
    return(<div className="card-list">
        {cards.map(card=>
        <MoviesCard card={card} />)}
    </div>)
}