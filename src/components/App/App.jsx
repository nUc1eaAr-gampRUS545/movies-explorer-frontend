import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { React, useState } from "react";
import apiSavedMovies from "../../utils/MainApi";
import { Routes, Route,useNavigate } from "react-router-dom";
import "../../vendor/fonts/font.css";

function App() {
  const [isLoggetIn, setLoggedIn] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const checkToken = () => {
    apiSavedMovies.getContent()
    .then((data) => {
      if (!data) {
        return;
      }
      navigate("/");
      setLoggedIn(true);})
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            isLoggetIn={isLoggetIn}
            closeMenu={() => setMenu(false)}
            openMenu={() => setMenu(true)}
            flag={menu}
          />
        }
      />
      <Route path="/login" element={<Login handleLogged={() => setLoggedIn(true)} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/error" element={<Error />} />
      <Route
        path="/profile"
        element={
          <Profile
            closeMenu={() => setMenu(false)}
            openMenu={() => setMenu(true)}
            flag={menu}
            isLoggetIn={isLoggetIn}
          />
        }
      />
      <Route
        path="/movies"
        element={
          <Movies
            openMenu={() => setMenu(true)}
            closeMenu={() => setMenu(false)}
            flag={menu}
            isLoggetIn={isLoggetIn}
          />
        }
      />
      <Route
        path="/saved-movies"
        element={
          <SavedMovies
            openMenu={() => setMenu(true)}
            closeMenu={() => setMenu(false)}
            flag={menu}
            isLoggetIn={isLoggetIn}
          />
        }
      />
    </Routes>
  );
}

export default App;
