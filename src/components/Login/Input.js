import classes from './Input.module.css';
const Input = (props)=>{
    const {label,type,name,handleChange,errorMessage,isValid,value} = props;
    return (
        <div className={classes.inputContainer}>
            <label htmlFor="">{label}</label>
            <input type={type} name={name} value={value} onChange={handleChange}/>
            {errorMessage && !isValid && (<span className={classes.error}>{errorMessage}</span>)}
        </div>
    )
}
export default Input;