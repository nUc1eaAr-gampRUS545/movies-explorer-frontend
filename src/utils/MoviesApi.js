class MoviesApi{
    _checkResponse(res) {
        if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }
    getMovies(){
        return fetch("https://api.nomoreparties.co/beatfilm-movies").then(this._checkResponse)
    }
}
 const movies=new MoviesApi();
 export default movies;
