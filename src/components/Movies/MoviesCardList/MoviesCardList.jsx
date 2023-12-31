import MoviesCard from "../MoviesCard/MoviesCard";
import { React, useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import {
  viewErrorMessage,
  detectWindowWidth,
} from "../../../utils/constatns";
import { writeFilms, writeShortFilms } from "../../../utils/FilterCards";
import "./MoviesCardList.css";
export default function MoviesCardList({ ...props }) {
  const [numberCards, setNumberCards] = useState(16);
  const [windowWidth, setWindowWidth] = useState(null);
  const [shortFilm, setshortFilm] = useState([]);
  const [movies, setMovies] = useState([]);
  const [savedFilmsId,setSavedId] = useState([]);
  const [storageMovie, setStorageMovie] = useState([]);
  const [storageShortMovie, setStorageShortMovie] = useState([]);
  const [checking, setChecking] = useState(false);

  const getScreenWidth = () => setWindowWidth(window.innerWidth);
  setInterval(getScreenWidth, 2000);
  useEffect(() => {
    detectWindowWidth(windowWidth, setNumberCards);
  }, [windowWidth]);
  
  useEffect(() => {
    const massiv=[]
    props.savedMovies.map((movie) => {
      if (movie.owner === props.isUserData._id) {
        massiv.push(movie.nameRU)
        setSavedId([...massiv]);
      }
     
    });
  }, [props.savedMovies]);

  const handleDeleteCard = (data) => {
    const card = props.savedMovies.filter(
      (movie) => movie.nameRU === data.nameRU
    );

    props.handleEditDeleteCardClick(card[0]);
  };
  const checkLocalStorage = () => {
    if (localStorage.getItem("checking") == "false") {
      return setChecking(false);
    } else {
      setStorageMovie([...JSON.parse(localStorage.getItem("Movies"))]);
      setStorageShortMovie([
        ...JSON.parse(localStorage.getItem("shortMovies")),
      ]);
      return setChecking(true);
    }
  };
  useEffect(() => {
    checkLocalStorage();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("Movies") == null) {
      return;
    } else {
      setStorageMovie(JSON.parse(localStorage.getItem("Movies")));
      setStorageShortMovie(JSON.parse(localStorage.getItem("shortMovies")));
    }
  }, [checking]);

  const clickButtonAddCards = () => {
    if (windowWidth > 1200) {
      setNumberCards(numberCards + 4);
    }
    if (windowWidth < 1200 && windowWidth > 761) {
      setNumberCards(numberCards + 2);
    }
    if (windowWidth < 761 && windowWidth < 1200) {
      setNumberCards(numberCards + 1);
    }
  };
  useEffect(() => {
    if (windowWidth > 1200) {
      setNumberCards(16);
    }
    if (windowWidth < 1200 && windowWidth > 480) {
      setNumberCards(8);
    }
    if (windowWidth < 761 && windowWidth < 1200) {
      setNumberCards(5);
    }
    if (props.search !== "") {
      setshortFilm(writeShortFilms(props.films, props.search));
      setMovies(writeFilms(props.films, props.search));
      localStorage.setItem(
        "shortMovies",
        JSON.stringify(writeShortFilms(props.films, props.search))
      );
      localStorage.setItem(
        "Movies",
        JSON.stringify(writeFilms(props.films, props.search))
      );
    } else {
      setshortFilm([]);
      setMovies([]);
    }
  }, [props.search]);
  const viewAddButton = (arg1, arg2, arg3, arg4) => {
    if (arg1 < arg2 && arg3 && arg4) {
      return (
        <button className={"cards-add"} onClick={() => clickButtonAddCards()}>
          Ещё
        </button>
      );
    }
  };
  return props.isLoading ? (
    <Preloader />
  ) : (
    <>
      <section className="card-list">
        {props.checkBox
          ? shortFilm.map((card) => {
              const duration = card.duration;
              return duration < 41 ? (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  key={card.id}
                  setFilm={(data) => props.setFilm(data)}
                  handleEditLikeCardClick={(data) => {
                    props.handleEditLikeCardClick(data);
                  }}
                />
              ) : (
                ""
              );
            })
          : movies.slice(0, numberCards).map((card) => {
              return (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  key={card.id}
                  setFilm={(data) => props.setFilm(data)}
                  handleEditLikeCardClick={(data) => {
                    props.handleEditLikeCardClick(data);
                  }}
                />
              );
            })}
        {props.checkStorage && !props.checkBox
          ? storageMovie.slice(0, numberCards).map((card) => {
              return (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  key={card.id}
                  setFilm={(data) => props.setFilm(data)}
                  handleEditLikeCardClick={(data) => {
                    props.handleEditLikeCardClick(data);
                  }}
                />
              );
            })
          : props.checkStorage &&
            storageShortMovie.slice(0, numberCards).map(
              (card) =>
                card.duration < 41 && (
                  <MoviesCard
                    card={card}
                    liked={savedFilmsId.includes(card.nameRU)}
                    handleDeleteCard={(card) => handleDeleteCard(card)}
                    key={card.id}
                    setFilm={(data) => props.setFilm(data)}
                    handleEditLikeCardClick={(data) => {
                      props.handleEditLikeCardClick(data);
                    }}
                  />
                )
            )}
      </section>
      <div className="cards-footer">
        {viewAddButton(
          numberCards,
          movies.length,
          !props.checkBox,
          !props.checkStorage
        )}
        {viewAddButton(
          numberCards,
          shortFilm.length,
          props.checkBox,
          !props.checkStorage
        )}
        {viewAddButton(
          numberCards,
          storageMovie.length,
          !props.checkBox,
          props.checkStorage
        )}
        {viewAddButton(
          numberCards,
          storageShortMovie.length,
          props.checkBox,
          props.checkStorage
        )}

        {viewErrorMessage(
          movies.length === 0,
          shortFilm.length === 0,
          !props.checkBox,
          !props.checkStorage
        )}
        {viewErrorMessage(
          true,
          shortFilm.length === 0,
          props.checkBox,
          !props.checkStorage
        )}
        {viewErrorMessage(
          storageMovie.length === 0,
          storageShortMovie.length === 0,
          !props.checkBox,
          props.checkStorage
        )}
        {viewErrorMessage(
          true,
          storageShortMovie.length === 0,
          props.checkBox,
          props.checkStorage
        )}
      </div>
    </>
  );
}
