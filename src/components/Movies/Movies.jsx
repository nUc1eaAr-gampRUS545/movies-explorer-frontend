import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import api from "../../utils/MainApi";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import movies from "../../utils/MoviesApi";
import {useNavigate } from "react-router-dom";
export default function Movies({...props}) {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchInputMovies, setSearchInput] = useState("");
  const [savedFilms, setSavedFilm] = useState([]);
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
    api
      .getSavedMovies()
      .then((data) => {
        setSavedFilm(data);
      })
      .catch((err) => {
navigate('/movies')
      });
  }, [props.isLoggedIn]);


  useEffect(() => {
    const buttonState = localStorage.getItem('checkBox');
    if (buttonState === 'true') {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
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
        setSavedFilm([...savedFilms,newCard])})
      
      .catch((err) => {
        navigate("/error")
      });
  };
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
          setCheckStorage={()=>setCheckStorage(true)}
        />
        <MoviesCardList
        isUserData={props.isUserData}
          films={films}
          savedMovies={savedFilms}
          isLoading={isLoading}
          search={searchInputMovies}
          checkBox={checkBox}
          handleEditDeleteCardClick={handleEditDeleteCardClick}
          handleEditLikeCardClick={handleEditLikeCardClick}
          checkStorage={checkStorage}
          setSearchInput={setSearchInput}
        />
      </main>
      <Footer />
    </>
  );
}
