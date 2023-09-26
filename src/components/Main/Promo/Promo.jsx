import "./Promo.css";
export default function Promo() {
  return (
    <div className="promo">
      <h2 className="promo__title">О проекте</h2>
      <div className="promo__containers">
      <div className="promo__container">
        <h3 className="promo__container__named">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="promo__container__content">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p></div>
        <div className="promo__container">
        <h3 className="promo__container__named">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="promo__container__content">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p></div>
      </div>
      <div className="promo__scale">
        <div className="promo__scale__backend">1 неделя</div>
        <div className="promo__scale__frontend">4 недели</div>
        <p className="promo__scale__named">Back-end</p>
        <p className="promo__scale__named">Front-end</p>
      </div>
    </div>
  );
}
