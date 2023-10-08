import "./Promo.css";
export default function Promo() {
  return (
    <section className="promo">
      <h2 className="promo__title">О проекте</h2>
      <div className="promo__containers">
      <div className="promo__containers-block">
        <h3 className="promo__containers-block-named">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="promo__containers-block-content">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p></div>
        <div className="promo__containers-block">
        <h3 className="promo__containers-block-named">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="promo__containers-block-content">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p></div>
      </div>
      <div className="promo__scale">
        <div className="promo__scale-backend">1 неделя</div>
        <div className="promo__scale-frontend">4 недели</div>
        <p className="promo__scale-named">Back-end</p>
        <p className="promo__scale-named">Front-end</p>
      </div>
    </section>
  );
}
