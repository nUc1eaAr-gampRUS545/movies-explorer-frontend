import Preloader from "../../Movies/Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
export default function MoviesCardList({ ...props }) {
  return props.isLoading ? (
    <Preloader />
  ) : (
    <section className="card-list">
      {props.savedFilms.map((card) => {
        const name = card.nameRU.toLowerCase();
        const duration = card.duration;
        if (props.checkBox && name.includes(props.search.toLowerCase()) && props.isUserData._id===card.owner) {
          return (
            duration <= 40 &&
            name.includes(props.search.toLowerCase()) && (
              <MoviesCard
                card={card}
                key={card.id}
                deleteCard={(data)=>props.deleteMovies(data)}
              />
            )
          );
        }
        else if (name.includes(props.search.toLowerCase()) && !props.checkBox  && props.isUserData._id===card.owner) {
          return (
            name.includes(props.search.toLowerCase()) && (
              <MoviesCard
                card={card}
                key={card.id}
                deleteCard={(data)=>props.deleteMovies(data)}
              />
            )
          );
        }
        else if(name.includes(props.search.toLowerCase()) && !props.checkBox  && props.isUserData._id===card.owner) {
          return (
            <MoviesCard
              card={card}
              key={card.id}
              deleteCard={(data)=>props.deleteMovies(data)}
            />
          );
        }
        else{
          return;
        }
      })}
    </section>
  );
}
