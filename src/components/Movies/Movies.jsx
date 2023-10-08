import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React,{useEffect,useState} from "react";
import movies from "../../utils/MoviesApi";
import { NavLink } from "react-router-dom";
export default function Movies({openMenu,closeMenu,flag,isLoggetIn}) {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(true);
 
  useEffect(() => {
    movies
      .getMovies()
      .then((data) => {
        setLoading(false);
        setFilm(data);
        
      })
      .catch((err) => {
        console.err(err);
        setLoading(false);
      })
      
  }, [isLoading]);
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
      <MoviesCardList films={films} isLoading={isLoading}/></main>
      <Footer />
    </>
  );
}
