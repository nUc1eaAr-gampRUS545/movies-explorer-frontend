import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import React,{useEffect,useState} from "react";
import movies from "../../utils/MoviesApi";
import { NavLink } from "react-router-dom";
export default function Movies({openMenu,closeMenu,flag}) {
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
        element={
          <>
            <NavLink to="/profile">
              <button className="header__acaunt">Аккаунт</button>
            </NavLink>
            <button className="header__menu-icon" onClick={openMenu}></button>
          </>
        }  closeMenu={closeMenu} flag={flag}
      />
      <SearchForm />
      <MoviesCardList films={films} isLoading={isLoading}/>
      <Footer />
    </>
  );
}
