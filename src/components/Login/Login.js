import classes from './Login.module.css';
import {useContext, useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../../firebaseConfig";
import {Link, useNavigate} from "react-router-dom";
import useHttp from "../../hooks/use-http";
import AuthContext from "../../Context/auth-context";

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
            <div className={classes.box}>
                <div>
                    <h2>Login</h2>
                </div>
                <form className={classes.loginForm} onSubmit={(e)=>ctx.onLogin(e,email,password)}>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        placeholder='Email'
                    />

                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        placeholder='password'
                    />
                    <div>
                        <div className={classes.password}>
                            <Link to='password'>비밀번호 찾기</Link>
                        </div>
                        <button type="submit" className={classes.loginBtn}>로그인</button>
                    </div>

                </form>
                <div className={classes.signupBox}>
                    <Link to='signup' className={classes.signupBtn} >회원가입폼</Link>
                </div>
            </div>
            </div>

    );
}
export default Login;