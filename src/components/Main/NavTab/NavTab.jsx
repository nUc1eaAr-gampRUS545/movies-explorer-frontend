import "./NavTab.css";
export default function NavTab() {
  return (
    <nav className="nav-tab">
      <a className="nav-tab__link" href="https://nuc1eaar-gamprus545.github.io/russian-travel/">
        <span className="nav-tab__span">Статичный сайт</span>
        <button className="nav-tab__button">↗</button>
      </a>
      <a className="nav-tab__link" href="https://nuc1eaar-gamprus545.github.io/russian-travel/">
        <span className="nav-tab__span" >Адаптивный сайт</span>
        <button className="nav-tab__button">↗</button>
      </a>
      <a className="nav-tab__link" href="https://nuc1eaar-gamprus545.github.io/russian-travel/">
        <span className="nav-tab__span">Одностраничное приложение</span>
        <button className="nav-tab__button">↗</button>
      </a>
    </nav>
  );
}
