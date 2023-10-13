import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import api from "../../utils/MainApi";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import movies from "../../utils/MoviesApi";
import {useNavigate } from "react-router-dom";
export default function Movies({ openMenu, closeMenu, flag, isLoggetIn }) {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchInputMovies, setSearchInput] = useState("");
  const [savedFilms, setSavedFilm] = useState([]);
  const [checkBox, setCheckBox] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    movies
      .getMovies()
      .then((data) => {
        setLoading(false);
        setFilm(data);
      })
      .catch((err) => {
        navigate("/error")
        setLoading(false);
      });
      
  }, [isLoading]);

  useEffect(() => {
    api
      .getSavedMovies()
      .then((data) => {
        setSavedFilm( data);
      })
      .catch((err) => {
        navigate("/error")
      });
  }, []);
  const handleEditDeleteCardClick = (card) => {
    api
      .deleteMovies(card._id)
      .then((res) => {
        setSavedFilm((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        navigate("/error")
      });
  };

  const handleEditLikeCardClick = (card) => {
    api.savedMovies(card)
      .then((newCard) => {
        setSavedFilm((state) =>
          state.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch((err) => {
        navigate("/error")
      });
  };
  return (
    <>
      <Header
        openMenu={openMenu}
        closeMenu={closeMenu}
        flag={flag}
        isLoggetIn={isLoggetIn}
      />
      <main>
        <SearchForm
          searchInputMovies={(data) => setSearchInput(data)}
          checkBox={checkBox}
          clickCheckBox={(data) => setCheckBox(data)}
        />
        <MoviesCardList
          films={films}
          savedMovies={savedFilms}
          isLoading={isLoading}
          search={searchInputMovies}
          checkBox={checkBox}
          handleEditDeleteCardClick={handleEditDeleteCardClick}
          handleEditLikeCardClick={handleEditLikeCardClick}
        />
      </main>
      <Footer />
    </>
  );
}
