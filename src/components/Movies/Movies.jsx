import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";

import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import movies from "../../utils/MoviesApi";
import {useNavigate } from "react-router-dom";
export default function Movies({...props}) {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchInputMovies, setSearchInput] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [checkStorage,setCheckStorage]=useState(false);
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
    const buttonState = localStorage.getItem('checkBox');
    if (buttonState === 'true') {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
  }, []);
 

  
  return (
    <>
      <Header
        {...props}
      />
      <main>
        <SearchForm
          searchInputMovies={(data) => setSearchInput(data)}
          checkBox={checkBox}
          clickCheckBox={(data) => setCheckBox(data)}
          setCheckStorage={(data)=>setCheckStorage(data)}
        />
        <MoviesCardList
        isUserData={props.isUserData}
          films={films}
          savedMovies={props.savedFilms}
          isLoading={isLoading}
          search={searchInputMovies}
          checkBox={checkBox}
          handleEditDeleteCardClick={props.handleEditDeleteCardClick}
          handleEditLikeCardClick={props.handleEditLikeCardClick}
          checkStorage={checkStorage}
          setSearchInput={setSearchInput}
        />
      </main>
      <Footer />
    </>
  );
}
