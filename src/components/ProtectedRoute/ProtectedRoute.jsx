import React from "react";
//import {Navigate} from 'react-router-dom';
import {Navigate, useNavigate } from "react-router-dom";

export const ProtectedRoute=({isLoggedIn,element})=>{
    
    return(
        isLoggedIn ? element : <Navigate to="/login"></Navigate>)

}