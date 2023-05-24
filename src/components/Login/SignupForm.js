import useForm from "./hooks/useForm";
import {signupForm} from "./FormConfig";
import classes from './SignupForm.module.css';
const SignupForm = ()=>{
    const {renderFormInputs,isFormValid}=useForm(signupForm);

    return (
        <form className={classes.signupForm}>
            <h1>회원가입</h1>
            {renderFormInputs()}
            <button type='submit' disabled={!isFormValid()}>submit</button>
        </form>
    )
}
export default SignupForm;