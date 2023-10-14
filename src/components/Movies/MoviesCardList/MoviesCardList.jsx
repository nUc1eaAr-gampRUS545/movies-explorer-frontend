import MoviesCard from "../MoviesCard/MoviesCard";
import { React, useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
export default function MoviesCardList({...props}) {
  const [numberCards, setNumberCards] = useState(16);
  const [windowWidth, setWindowWidth] = useState(null);
  const [shortFilm, setshortFilm] = useState([]);
  const [movies, setMovies] = useState([]);
  const [storageMovie, setStorageMovie] = useState([]);
  const [storageShortMovie, setStorageShortMovie] = useState([]);
  const savedFilmsId = [];
  const saveId = () => {
    props.savedMovies.map((movie) => savedFilmsId.push(movie.nameRU, movie._id));
  };
  saveId();
  function handleDeleteCard(data) {
    const card = props.savedMovies.filter((movie) => movie.nameRU === data.nameRU);
    props.handleEditDeleteCardClick(card[0]);
  }
  const getScreenWidth = () => setWindowWidth(window.innerWidth);
  setTimeout(getScreenWidth, 2000);
  useEffect(() => {
    setStorageMovie(JSON.parse(localStorage.getItem("Movies")));
    setStorageShortMovie(JSON.parse(localStorage.getItem("shortMovies")))
    getScreenWidth();
   
  }, []);
  const clickButtonAddCards = () => {
    if (windowWidth > 1200) {
      getScreenWidth();
      setNumberCards(numberCards + 4);
    }
    if (windowWidth < 1200 && windowWidth > 761) {
      getScreenWidth();
      setNumberCards(numberCards + 2);
    }
    if (windowWidth < 761 && windowWidth < 1200) {
      getScreenWidth();
      setNumberCards(numberCards + 1);
    }
  };
  useEffect(() => {
    if (props.search !== "" || props.search !== " ") {
      setshortFilm(
        props.films.filter(
          (card) => card.nameRU.includes(props.search) && card.duration < 41 && card
        )
      );
      setMovies(props.films.filter((card) => card.nameRU.includes(props.search) && card));
    
    }
  }, [props.search]);

  return props.isLoading ? (
    <Preloader />
  ) : (
    <>
      <section className="card-list">
        {props.checkBox
          ? shortFilm.map((card) => {
              localStorage.setItem("shortMovies", JSON.stringify(shortFilm));
              return (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  handleEditLikeCardClick={(data) =>
                    props.handleEditLikeCardClick(data)
                  }
                />
              );
            })
          : movies.slice(0, numberCards).map((card) => {
              localStorage.setItem("Movies", JSON.stringify(movies));
              return (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  handleEditLikeCardClick={(data) =>
                    props.handleEditLikeCardClick(data)
                  }
                />
              );
            })}
        {props.checkStorage &&
          storageMovie.slice(0, numberCards).map((card) => {
            
            return !props.checkBox && (
              <MoviesCard
                card={card}
                liked={savedFilmsId.includes(card.nameRU)}
                handleDeleteCard={(card) => handleDeleteCard(card)}
                handleEditLikeCardClick={(data) =>
                  props.handleEditLikeCardClick(data)
                }
              />
            );
          })}
           {props.checkStorage &&
          storageShortMovie.slice(0, numberCards).map((card) => {
            
            return props.checkBox && (
              <MoviesCard
                card={card}
                liked={savedFilmsId.includes(card.nameRU)}
                handleDeleteCard={(card) => handleDeleteCard(card)}
                handleEditLikeCardClick={(data) =>
                  props.handleEditLikeCardClick(data)
                }
              />
            );
          })}
          
      </section>
      <div className="cards-footer">
        {numberCards < movies.length ? (
          <button className={"cards-add"} onClick={() => clickButtonAddCards()}>
            Ещё
          </button>
        ) : (
          ""
        )}
        
        {movies.length === 0 || shortFilm.length === 0 || storageMovie.length === 0 || storageShortMovie.length === 0 ? (
          <div className="movies-eror">
            К сожалению по вашему запросу ничего не найдено
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
