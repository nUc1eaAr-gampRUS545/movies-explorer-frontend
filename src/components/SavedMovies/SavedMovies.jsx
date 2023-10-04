import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { savedCard } from "../../utils/constatns";
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
        openMenu={openMenu}
        closeMenu={closeMenu}
        flag={flag}
        isLoggetIn={isLoggetIn}
      />
      <main>
      <SearchForm />
      <MoviesCardList films={savedCard}/></main>
      <Footer />
    </>
  );
}
