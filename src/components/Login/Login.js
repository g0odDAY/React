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
        <form onSubmit={(e)=>ctx.onLogin(e,email,password)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
        <Link to='sign'>회원가입폼</Link>
        </div>
    );
}
export default Login;