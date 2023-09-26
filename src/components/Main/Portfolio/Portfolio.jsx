import "./Portfolio.css";
export default function Portfolio() {
  return (
    <div className="portfolio" name="student">
      <h2 className="portfolio__title">Студент</h2>
      <div className="portfolio__container">
        <div className="portfolio__container__photo"></div>

        <h3 className="portfolio__container__name">Никита</h3>

        <p className="portfolio__container__about">Студент МГТУ им. Баумана</p>
        <p className="portfolio__container__history">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          className="portfolio__container__git"
          href="https://github.com/nUc1eaAr-gampRUS545/"
        >
          Git nUc1eaAr-gampRUS545
        </a>
        <a
          className="portfolio__container__info"
          href="https://kaluga.hh.ru/applicant/resumes?hhtmFrom=main&hhtmFromLabel=header"
        >
          Портфолио
        </a>
      </div>
    </div>
  );
}
