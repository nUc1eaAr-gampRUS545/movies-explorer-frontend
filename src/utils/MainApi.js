const baseURL='https://movies-explorer-api.nomoredomainsicu.ru';
class MainApi{
    _checkResponse(res) {
        if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }
    savedMovies(data){
        return(
            fetch(`${baseURL}/movies`,{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                credentials:"include",
                body: JSON.stringify(data)
                }).then(this._checkResponse))
    }
    getSavedMovies(){
        return(
            fetch(baseURL).then(this._checkResponse)
        )
    }
}
const apiSavedMovies=new MainApi();
export default apiSavedMovies;