import "./Input.css"
const Input=({message,...props})=>{
    
    return (
        <input className={
            message !== ""
              ? "input input__blocked"
              : "input"
          } {...props} ></input>)
}
export default Input;