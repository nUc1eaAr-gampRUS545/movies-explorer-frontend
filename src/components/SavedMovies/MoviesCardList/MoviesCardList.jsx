import Preloader from "../../Movies/Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import createKeys from "../../CreateKeys/CreateKeys";
export default function MoviesCardList({ ...props }) {
  return props.isLoading ? (
    <Preloader />
  ) : (
    <section className="card-list">
      {props.savedFilms.map((card) => {
        const name = card.nameRU;
        const duration = card.duration;
        if (props.checkBox && name.includes(props.search) !== "") {
          return (
            duration <= 40 &&
            name.includes(props.search) && (
              <MoviesCard
                card={card}
                key={createKeys()}
                deleteCard={props.deleteMovies}
              />
            )
          );
        }
        else if (name.includes(props.search) !== "" && !props.checkBox) {
          return (
            name.includes(props.search) && (
              <MoviesCard
                card={card}
                key={createKeys()}
                deleteCard={props.deleteMovies}
              />
            )
          );
        }
        else if(name.includes(props.search) === "" && !props.checkBox) {
          return (
            <MoviesCard
              card={card}
              key={createKeys}
              deleteCard={props.deleteMovies}
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
