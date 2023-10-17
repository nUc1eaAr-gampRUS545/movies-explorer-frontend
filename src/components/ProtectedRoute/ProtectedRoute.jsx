import { useNavigate } from "react-router-dom";
export const ProtectedRoute = ({ isLoggedIn, element }) => {
  const navigate = useNavigate();
  return isLoggedIn ? element : navigate("/");
};
