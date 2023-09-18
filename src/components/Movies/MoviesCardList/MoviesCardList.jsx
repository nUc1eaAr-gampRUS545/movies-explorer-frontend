import { cards } from "../../../utils/constatns";
import MoviesCard from "../MoviesCard/MoviesCard";
import { React, useState } from "react";
import "./MoviesCardList.css";
export default function MoviesCardList() {
  const [numberCards, setNumberCards] = useState(16);
  const slicedArray = cards.slice(0, numberCards);
  return (
    <>
      <div className="card-list">
        {slicedArray.map((card) => (
          <MoviesCard card={card} />
        ))}
      </div>
      <div className="cards__footer">
      <button
        className="cards__add"
        onClick={() => 
          numberCards + 16 > cards.length
            ? setNumberCards(cards.length)
            : setNumberCards(numberCards + 16)
        }
      >
        Ещё
      </button></div>
    </>
  );
}
