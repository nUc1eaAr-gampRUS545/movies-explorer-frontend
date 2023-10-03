import MoviesCard from "../MoviesCard/MoviesCard";
import { React, useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

import "./MoviesCardList.css";
export default function MoviesCardList({films,isLoading,saveFilm}) {
  const [numberCards, setNumberCards] = useState(16);
  
  const slicedArray = films.slice(0, numberCards);

  
  return ( isLoading ? <Preloader/> :
    <>
      <div className="card-list">
        {slicedArray.map((card) => (
          <MoviesCard card={card}/>
        ))}
      </div>
      <div className="cards__footer">
        <button
          className="cards__add"
          onClick={() =>
            numberCards + 16 > films.length
              ? setNumberCards(films.length)
              : setNumberCards(numberCards + 16)
          }
        >
          Ещё
        </button>
      </div>
    </>
  )
}
