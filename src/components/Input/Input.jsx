import "./Input.css"
const Input=({message,handleChange})=>{
    return (
        <input className={
            message !== ""
              ? "input input__blocked"
              : "input"
          } onChange={handleChange} required></input>)
}
export default Input;