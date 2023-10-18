export const writeShortFilms=(massiv,stroka)=>{
    return  massiv.filter(
       (card) =>
         card.nameRU.includes(stroka) && card.duration < 41 && card)
   }; 
export const writeFilms=(massiv,stroka)=>{
     return  massiv.filter(
        (card) =>
          card.nameRU.includes(stroka) && card)
    };