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
                headers:{//'Áccept':'application/json',
                    'Content-Type': 'application/json'},
                credentials:"include",
                body: JSON.stringify(data)
                }).then(this._checkResponse))
    }
    getSavedMovies(){
        return(
            fetch(baseURL,{
                method:"GET",
                headers:{//'Áccept':'application/json',
                    'Content-Type': 'application/json'},
                credentials:"include"}).then(this._checkResponse)
        )
    }
    getContent=()=>{
        return(fetch(`${baseURL}/users/me`,{
            method:"GET",
            headers:{'Content-Type': 'application/json',},
            credentials:"include"

            }).then(this._checkResponse))
    
    }
}
const apiSavedMovies=new MainApi();
export default apiSavedMovies;