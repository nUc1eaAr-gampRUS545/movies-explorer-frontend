import MoviesCard from "../MoviesCard/MoviesCard";
import { React, useState } from "react";
import Preloader from "../Preloader/Preloader";
import Button from "../../Buttons/Button";
import "./MoviesCardList.css";
export default function MoviesCardList({
  films,
  savedMovies,
  isLoading,
  search,
  checkBox,
  handleEditDeleteCardClick,
  handleEditLikeCardClick
}) {
 
  const [slicedArray,setSlicedArray]=useState([])
  const savedFilmsId = [];
  const saveId = () => {
    savedMovies.map((movie) => savedFilmsId.push(movie.nameRU, movie._id));
  };
  saveId();
  function handleDeleteCard(data) {
    const card = savedMovies.filter((movie) => movie.nameRU === data.nameRU);
    handleEditDeleteCardClick(card[0]);
  }
  
  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <section className="card-list">
        {slicedArray.map((card) => {
          const name = card.nameRU;
          const duration = card.duration;

          if (name.includes(search) === "" && !checkBox) {
            return (
              <MoviesCard
                card={card}
                liked={savedFilmsId.includes(card.nameRU)}
                handleDeleteCard={(card) => handleDeleteCard(card)}
                handleEditLikeCardClick={(data)=>handleEditLikeCardClick(data)}
              />
            );
          }

          if (checkBox && name.includes(search) !== "") {
            return (
              duration <= 40 &&
              name.includes(search) && (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  handleEditLikeCardClick={(data)=>handleEditLikeCardClick(data)}
                />
              )
            );
          }if (checkBox && name.includes(search) === "") {
            return (
              duration <= 40 &&
              (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  handleEditLikeCardClick={(data)=>handleEditLikeCardClick(data)}
                />
              )
            );
          }
          
          if (
            name.includes(search) !== "" &&
            !checkBox &&
            savedMovies.includes(card)
          ) {
            return (
              name.includes(search) && (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  handleEditLikeCardClick={(data)=>handleEditLikeCardClick(data)}
                />
              )
            );
          }
          if (
            name.includes(search) !== "" &&
            !checkBox &&
            !savedMovies.includes(card)
          ) {
            return (
              name.includes(search) && (
                <MoviesCard
                  card={card}
                  liked={savedFilmsId.includes(card.nameRU)}
                  handleDeleteCard={(card) => handleDeleteCard(card)}
                  handleEditLikeCardClick={(data)=>handleEditLikeCardClick(data)}
                />
              )
            );
          }

          if (
            name.includes(search) === "" &&
            !checkBox &&
            !savedMovies.includes(card)
          ) {
            return (
              <MoviesCard
                card={card}
                liked={savedFilmsId.includes(card.nameRU)}
                handleDeleteCard={(card) => handleDeleteCard(card)}
                handleEditLikeCardClick={(data)=>handleEditLikeCardClick(data)}

              />
            );
          }
        })}
      </section>
      <div className="cards-footer">
        <Button films={films} checkBox={checkBox} setSlicedArray={(data)=>setSlicedArray(data)} search={search}/>
      </div>
    </>
  );
}
/* if(name.includes(search) === "" && !checkBox && savedMovies.includes(card)){
          return <MoviesCard card={card} liked={true}/>
         }

         if(checkBox && name.includes(search) !== "" ){
          return duration<=40 &&  name.includes(search)  && (<MoviesCard card={card} />)
         }
         if(name.includes(search) !=="" && !checkBox && savedMovies.includes(card)){
          return name.includes(search) && <MoviesCard card={card} liked={true}/>
         }
         if(name.includes(search) !=="" && !checkBox && !savedMovies.includes(card)){
          return name.includes(search) && <MoviesCard card={card} liked={false}/>
         }
        
         if(name.includes(search) === "" && !checkBox && !savedMovies.includes(card)){
          return <MoviesCard card={card} liked={false}/>
         }*/
