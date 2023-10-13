import { useState, useEffect } from "react";
const Button = ({ ...props }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [numberCards, setNumberCards] = useState(16);
  const slicedArray =
    props.checkBox || props.search !== ""
      ? props.films
      : props.films.slice(0, numberCards);
  useEffect(() => {
    props.setSlicedArray(slicedArray);
    getScreenWidth();
  }, [props.checkBox]);
  const getScreenWidth = () => setWindowWidth(window.innerWidth);
  setTimeout(getScreenWidth, 2000);
  const clickButtonAddCards = () => {
    if (windowWidth > 1200) {
      getScreenWidth();
      setNumberCards(numberCards + 4);
      props.setSlicedArray(slicedArray);
    }
    if (windowWidth < 1200 && windowWidth > 761) {
      getScreenWidth();
      setNumberCards(numberCards + 2);
      props.setSlicedArray(slicedArray);
    }
    if (windowWidth < 761 && windowWidth < 1200) {
      getScreenWidth();
      setNumberCards(numberCards + 1);
      props.setSlicedArray(slicedArray);
    }
  };
  return numberCards !== slicedArray.length ? (
    ""
  ) : (
    <button className={"cards-add"} onClick={() => clickButtonAddCards()}>
      Ещё
    </button>
  );
};
export default Button;
