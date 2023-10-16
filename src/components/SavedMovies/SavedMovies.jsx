import Header from "../Header/Header";
import api from "../../utils/MainApi";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
export default function SavedMovies({...props}) {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchInputMovies,setSearchInput]=useState('');
  const [checkBox,setCheckBox]=useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    api.getSavedMovies().then((data) => {
      setFilm(...films,data);
      setLoading(false)
    }
      ).catch((err)=>{
        navigate("/error")
        setLoading(false)
      })
  },[props.isLoggedIn]);
  
  const handleEditDeleteCardClick = (card) => {
      api
        .deleteMovies(card._id)
        .then((res) => {
          setFilm((state) => state.filter((c) => c._id !== card._id));
        })
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
      <SearchForm  searchInputMovies={(data)=>setSearchInput(data)} checkBox={checkBox} clickCheckBox={(data)=>setCheckBox(data)}/>
      <MoviesCardList savedFilms={films} isLoading={isLoading} deleteMovies={handleEditDeleteCardClick} search={searchInputMovies} checkBox={checkBox}/></main>
      <Footer />
    </>
  );
}
