import { useState, useEffect } from "react";

const useValidation=(value,validations)=>{
    const [isEmpty,setIsEmpty]=useState(true);
    const [minLengthError,setMinLengthError]=useState(false);
    const [isEmailError,setInEmailError]=useState(false);
    const [inputValid,setInputValid]=useState(false);
    const [nameError,setNameError]=useState(false);
    useEffect(()=>{
        for (const validation in validations) {
            // eslint-disable-next-line default-case
            switch(validation){
             case 'minLength':
                 value.length < validations[validation] ? setMinLengthError(true): setMinLengthError(false);
                 break;
             case 'isEmpty':
                 value.isEmpty ? setIsEmpty(false) : setIsEmpty(true);
                 break;
             case 'isEmail':
                const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                re.test(String(value).toLowerCase()) ? setInEmailError(false) : setInEmailError(true);
                break
            case 'name':
                const rex =/^[a-zA-Zа-яА-ЯёЁ\s-]*$/;
                rex.test(String(value).toLowerCase())? setNameError(false) : setNameError(true);
            }
         }
    },[value]);

    useEffect(()=>isEmailError || minLengthError || nameError  ? setInputValid(false) : setInputValid(true))

    return {
        isEmpty,minLengthError,isEmailError,inputValid,nameError
    }
    
}

const useInput = (initionalValue,validations) => {
  const [value, setValue] = useState(initionalValue);
  const [isDirty, setIsDirty] = useState(false);
  const [formValue, setFormValue] = useState({})
  const valid =useValidation(value,validations)
  const onChange = (data) => {
    setValue(data);
    
    setFormValue(data);
  };
  const onBlur = (e) => {
    setIsDirty(true);
  };
  return { value, onChange, onBlur,formValue,isDirty,...valid };
};
export default useInput;