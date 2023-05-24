import {useContext, useRef, useState} from "react";
import { getAuth } from 'firebase/auth';
import {app} from '../../firebaseConfig';
import classes from './Signup.module.css';
import AuthContext from "../../Context/auth-context";

// Firebase 인증 객체
const auth = getAuth(app);
const Signup = ()=>{
    const [email,setEmail]=useState('');
    const [emailValid,setEmailValid] = useState();
    const [password,setPassword] = useState('');
    const ctx = useContext(AuthContext);

    const onChange = (event) => {
        const {target: { name, value }} = event;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }


    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div>
                    <h2>회원가입</h2>
                </div>
                <form className={classes.signupForm} onSubmit={(e)=>ctx.onSignup(e,email,password)}>
                    <div className={classes.formGroup} >
                        <button type='button' onClick={()=>setEmailValid(ctx.checkDuplicateEmail(email))}></button>
                        <input
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Email"
                            className={classes.emailInput}
                            value={email}
                            onChange={onChange}
                            required
                        />

                    </div>
                    <div className={classes.formGroup}>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className={classes.emailInput}
                            value={password}
                            onChange={onChange}
                            required
                        />
                        <div className={classes.feedback}>문자, 숫자, 기호를 포함하여 8자 이상을 사용해주세요.</div>
                    </div>
                    <button type="submit" className={classes.signupBtn}>회원가입</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;