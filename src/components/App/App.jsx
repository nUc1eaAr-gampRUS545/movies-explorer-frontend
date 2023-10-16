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
        navigate("/");
      })
      .catch(() => {
        setLoggedIn(false);
        setUserData("");
        navigate("/");
      });
  }, [isLoggetIn]);

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
                  setLoggedIn={()=>setLoggedIn(false)}
                  setUserData={(data)=>setUserData(data)}
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
                  isLoggedIn={isLoggetIn}
                  closeMenu={() => setMenu(false)}
                  openMenu={() => setMenu(true)}
                  flag={menu}
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
                  isLoggedIn={isLoggetIn}
                  closeMenu={() => setMenu(false)}
                  openMenu={() => setMenu(true)}
                  flag={menu}
                />
              }
            />
          }
        />
        <Route
          path="/login"
          element={<Login handleLogged={() => setLoggedIn(true)} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
