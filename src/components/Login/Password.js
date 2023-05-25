import classes from './Password.module.css';
import {useContext, useRef, useState} from "react";
import authContext from "../../Context/auth-context";
const Password = () =>{
    const emailRef = useRef();
    const ctx = useContext(authContext);


    return <div className={classes.container}>

        <form className={classes.form}>
            <h2>비밀번호 찾기</h2>
            <div className={classes.inputContainer}>
                <label>이메일</label>
                <input type="email" required ref={emailRef}/>
            </div>
            <div>
                <button className={classes.signupBtn} onClick={(e)=>ctx.resetPassword(e,emailRef.current.value)}>비밀번호 재설정</button>
            </div>
        </form>

    </div>
}
export default Password;