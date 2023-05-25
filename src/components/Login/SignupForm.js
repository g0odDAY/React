import useForm from "./hooks/useForm";
import {signupForm} from "./utils/FormConfig";
import classes from './SignupForm.module.css';
import {Link} from "react-router-dom";
const SignupForm = ()=>{
    const {renderFormInputs,isFormValid,submitHandler}=useForm(signupForm);

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={(e)=>submitHandler(e)}>
                <h2>회원가입</h2>
                {renderFormInputs()}
                <button className={classes.signupBtn} disabled={!isFormValid()}>회원가입</button>
                <div className={classes.sector}>
                    회원이신가요? <Link to='/login'>로그인 하기</Link>
                </div>
            </form>
        </div>
    )
}
export default SignupForm;