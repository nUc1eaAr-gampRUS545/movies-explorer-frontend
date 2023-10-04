const baseURL='https://movies-explorer-api.nomoredomainsicu.ru/';
class UserAuth{
    _checkResponse(res) {
        if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }
    registr(data){
        return(
            fetch(`${baseURL}signup`,{
                method:"POST",
                credentials:"include",
                headers:{//'Áccept':'application/json',
                    'Content-Type': 'application/json'},
                
                body: JSON.stringify(data)
                }).then(this._checkResponse))
        
        }
    authorization(data){
        return(
            fetch(`${baseURL}signin`,{
                method:"POST",
                credentials:"include",
                headers: {
                    //"Áccept": "application/json",
                    "Content-Type": "application/json"},
                
                body: JSON.stringify(data)
                }).then(this._checkResponse))
    }
}
const UserAuthorization =new UserAuth();
export default UserAuthorization;