import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
export default function SavedMovies({ ...props }) {
  const [searchInputMovies, setSearchInput] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  useEffect(() => {
    const buttonState = localStorage.getItem("SMcheckBox");
    if (buttonState === "true") {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
  }, []);


  return (
    <>
      <Header {...props} />
      <main>
        <SearchForm
          searchInputMovies={(data) => setSearchInput(data)}
          checkBox={checkBox}
          clickCheckBox={(data) => setCheckBox(data)}
        />
        <MoviesCardList
          isUserData={props.isUserData}
          savedFilms={props.savedFilms}
          isLoading={props.isLoading}
          deleteMovies={(data)=>props.handleEditDeleteCardClick(data)}
          search={searchInputMovies}
          checkBox={checkBox}
        />
      </main>
      <Footer />
    </>
  );
}
