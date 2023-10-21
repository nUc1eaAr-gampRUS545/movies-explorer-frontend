export const textError = (message) => {
    if (message === "Ошибка 401") {
      return "Вы ввели неправильный логин или пароль.";
    }
    if (message === "Ошибка 400") {
      return "При регистрации пользователя произошла ошибка.";
    }
  };


export const viewErrorMessage = (arg1, arg2, arg3, arg4) => {
    if (arg1 === null) {
      return;
    }
    if (arg1 && arg2 && arg3 && arg4) {
      return <div className="movies-eror">Ничего не найдено</div>;
    }
  };

export const detectWindowWidth=(width,setNumberCard)=>{
    if(width <1200 && width > 480){
      setNumberCard(8)
    }
    if(width <480 ){
      setNumberCard(5)
    }
    if(width> 1200){
      setNumberCard(16)
    }
}