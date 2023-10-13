const baseURL = "https://movies-explorer-api.nomoredomainsicu.ru";
class MainApi {
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  moviesObject(data) {
    return {
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image.url,
      trailerLink: data.trailerLink,
      thumbnail: "none",
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    };
  }
  savedMovies(data) {
    return fetch(`${baseURL}/movies`, {
      method: "POST",
      headers: {
        //'Áccept':'application/json',
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(this.moviesObject(data)),
    }).then(this._checkResponse);
  }
  updateUserInfo(data) {
    return fetch(`${baseURL}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
  deleteMovies(data) {
    return fetch(`${baseURL}/movies/${data}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      
    }).then(this._checkResponse);
  }
  getSavedMovies() {
    return fetch(`${baseURL}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this._checkResponse);
  }
  signOut() {
    return fetch(`${baseURL}/signout`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this._checkResponse);
  }
  getContent = () => {
    return fetch(`${baseURL}/users/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then(this._checkResponse);
  };
}
const api = new MainApi();
export default api;
