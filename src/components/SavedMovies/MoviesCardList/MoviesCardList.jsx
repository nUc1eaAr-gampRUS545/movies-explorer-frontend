import { savedCard } from "../../../utils/constatns";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList(){
    return(<div className="card-list">
        {savedCard.map(card=>
        <MoviesCard card={card} />)}
    </div>)
}