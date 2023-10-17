import "./Error.css";
import { useNavigate } from "react-router-dom";

export default function Error() {
 const navigate=useNavigate()
  return (
    <div className="error">
      <div className="error__number">404</div>
      <div className="error__message">Страница не найдена</div>
      <button className="error__out" onClick={()=>{navigate(-1)}}>
        Назад
      </button>
    </div>
  );
}
