
import Preloader from "../../Movies/Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList({savedFilms,isLoading,deleteMovies,search,checkBox}){
    return( isLoading ? <Preloader/> :
    <section className="card-list">
    {savedFilms.map((card) => {
       const name=card.nameRU;
       const duration=card.duration;
       if(checkBox && name.includes(search)!==""){
        //return name.includes(search) &&  && <MoviesCard card={card} />})
        return duration<=40 &&  name.includes(search)  && (<MoviesCard card={card} key={card._id} deleteCard={deleteMovies}/>)
       }
       if(name.includes(search)!== "" && !checkBox){
        return name.includes(search) && <MoviesCard card={card} key={card._id} deleteCard={deleteMovies}/>
       } 
       if(name.includes(search)=== "" && !checkBox){
        return <MoviesCard card={card} key={card._id} deleteCard={deleteMovies}/>
       }
       
    
    })}
    </section>
    )

}