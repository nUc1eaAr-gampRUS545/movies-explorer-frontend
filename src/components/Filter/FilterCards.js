export const writeShortFilms=(massiv,stroka)=>{
    return  massiv.filter(
       (card) =>
         card.nameRU.toLowerCase().includes(stroka.toLowerCase()) && card.duration < 41 && card)
   }; 
export const writeFilms=(massiv,stroka)=>{
     return  massiv.filter(
        (card) =>
          card.nameRU.toLowerCase().includes(stroka.toLowerCase()) && card)
    };