import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { React,useState} from "react";
import { Routes, Route} from "react-router-dom";

import "../../vendor/fonts/font.css"
function App() {

  const [menu,setMenu]=useState(false);

  return (
  <Routes>
   <Route path="/" element={<Main />}/>
   <Route path="/login" element={<Login />}/>
   <Route path="/register" element={<Register />}/>
   <Route path="/error" element={<Error/>}/>
   <Route path="/profile" element={<Profile closeMenu={()=>setMenu(false)} openMenu={()=>setMenu(true)} flag={menu}/>} />
   <Route path="/movies" element={<Movies openMenu={()=>setMenu(true)} closeMenu={()=>setMenu(false)} flag={menu} />}/>
   <Route path="/saved-movies" element={<SavedMovies openMenu={()=>setMenu(true)} closeMenu={()=>setMenu(false)} flag={menu}/>}/>
  </Routes>
  );
}

export default App;
