import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { React, useEffect, useState } from "react";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../../vendor/fonts/font.css";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {
  const [isLoggetIn, setLoggedIn] = useState(false);
  const [isUserData, setUserData] = useState({});
  const [menu, setMenu] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [savedFilms, setSavedFilm] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    api
      .getContent()
      .then((data) => {
        if (!data) {
          return;
        }
        setLoggedIn(true);
        setUserData(data);
      })
      .catch(() => {
        setLoggedIn(false);
        setUserData("");
      });
  }, [isLoggetIn]);

  useEffect(() => {
    api
      .getSavedMovies()
      .then((data) => {
        setSavedFilm(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [isLoggetIn]);

  const handleEditLikeCardClick = (card) => {
    api
      .savedMovies(card)
      .then((newCard) => {
        setSavedFilm([...savedFilms, newCard]);
      })
      .catch((err) => {
        navigate("/error");
      });
  };
  const handleEditDeleteCardClick = (card) => {
    api
      .deleteMovies(card._id)
      .then((res) => {
        setSavedFilm((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        navigate("/error");
      });
  };
  return (
    <CurrentUserContext.Provider value={isUserData}>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggetIn}
              closeMenu={() => setMenu(false)}
              openMenu={() => setMenu(true)}
              flag={menu}
            />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggetIn}
              element={
                <Profile
                  isUserData={isUserData}
                  isLoggedIn={isLoggetIn}
                  closeMenu={() => setMenu(false)}
                  openMenu={() => setMenu(true)}
                  flag={menu}
                  setLoggedIn={(data) => setLoggedIn(data)}
                  setUserData={(data) => setUserData(data)}
                />
              }
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggetIn}
              element={
                <SavedMovies
                  isUserData={isUserData}
                  handleEditDeleteCardClick={handleEditDeleteCardClick}
                  isLoggedIn={isLoggetIn}
                  closeMenu={() => setMenu(false)}
                  openMenu={() => setMenu(true)}
                  flag={menu}
                  isLoading={isLoading}
                  savedFilms={savedFilms}
                />
              }
            />
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggetIn}
              element={
                <Movies
                  isUserData={isUserData}
                  isLoggedIn={isLoggetIn}
                  handleEditLikeCardClick={handleEditLikeCardClick}
                  handleEditDeleteCardClick={handleEditDeleteCardClick}
                  closeMenu={() => setMenu(false)}
                  openMenu={() => setMenu(true)}
                  flag={menu}
                  savedFilms={savedFilms}
                />
              }
            />
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isLoggedIn={!isLoggetIn}
              element={
                <Login
                  handleLogged={() => setLoggedIn(true)}
                  isLoggedIn={isLoggetIn}
                />
              }
            />
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              isLoggedIn={!isLoggetIn}
              element={
                <Register
                  handleLogged={() => setLoggedIn(true)}
                  isLoggedIn={isLoggetIn}
                />
              }
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
