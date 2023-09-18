import "./Error.css"
export default function Error(){
    return(<div className="error">
        <div className="error__number">404</div>
        <div className="error__message">Страница не найдена</div>
        <a className="error__out">Назад</a>
    </div>)
}