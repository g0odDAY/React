import classes from './Login.module.css';
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import {AiFillLock} from "react-icons/ai";

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(AuthContext);

    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className={classes.container}>

                <form className={classes.form} onSubmit={(e)=>ctx.onLogin(e,email,password)}>
                    <h2><AiFillLock/>로그인</h2>
                    <div className={classes.inputContainer}>
                        <label htmlFor="">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className={classes.inputContainer}>
                        <label htmlFor="">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <div className={classes.password}>
                            <Link to='password'>비밀번호 찾기</Link>
                        </div>
                        <button type="submit" className={classes.loginBtn}>로그인</button>
                    </div>
                    <div className={classes.signupBox}>
                        회원이 아니신가요? <Link to='signup' className={classes.signupBtn} >회원가입</Link>
                    </div>
                </form>

            </div>

    );
}
export default Login;