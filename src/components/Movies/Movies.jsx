import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm.jsx";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
export default function Movies({openMenu,closeMenu,flag}) {
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
      <MoviesCardList />
      <Footer />
    </>
  );
}
