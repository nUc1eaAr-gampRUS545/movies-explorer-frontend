import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import apiSavedMovies from "../../utils/MainApi";
export default function SavedMovies({ openMenu, closeMenu, flag,isLoggetIn }) {
  const [films, setFilm] = useState([]);
  useEffect(() => {
    isLoggetIn &&
    apiSavedMovies.getSavedMovies((data) => {
      setFilm(data);
    });
  },[isLoggetIn]);
 
  return (
    <>
      <Header
        element={
          <>
            <NavLink to="/profile">
              <button className="header__acaunt" onClick={closeMenu}>
                Аккаунт
              </button>
            </NavLink>
            <button className="header__menu-icon" onClick={openMenu}></button>
          </>
        }
        closeMenu={closeMenu}
        flag={flag}
      />
      <SearchForm />
      <MoviesCardList films={films}/>
      <Footer />
    </>
  );
}
