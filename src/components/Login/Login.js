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
        <form className={classes.loginForm} onSubmit={(e)=>ctx.onLogin(e,email,password)}>
            <div className={classes.box}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    placeholder='@포함한 이메일형식'
                />
            </div>
            <div className={classes.box}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    placeholder='7자리 이상 입력해주세요.!'
                />
            </div>
            <button type="submit" className={classes.submitBtn}>Login</button>
        </form>
        <Link to='sign' className={classes.signForm} >회원가입폼</Link>
        </div>
    );
}
export default Login;