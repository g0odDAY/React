import classes from './Password.module.css';
import {useContext, useRef} from "react";
import authContext from "../../Context/auth-context";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
const Password = () =>{
    const emailRef = useRef();
    const ctx = useContext(authContext);


    return <div className={classes.container}>
        <h1>비밀번호 찾기</h1>
        <form action="">
            <input type="email" placeholder='이메일' ref={emailRef}/>
            <button onClick={(e)=>ctx.resetPassword(e,emailRef.current.value)}>비밀번호 재설정</button>
        </form>
    </div>
}
export default Password;