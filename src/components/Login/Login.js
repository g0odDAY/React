import classes from './Login.module.css';
import {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../../firebaseConfig";
import {Link, useNavigate} from "react-router-dom";

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = async (email, password) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigation = useNavigate();
        console.log(email,password);
        try {
            await signInWithEmailAndPassword(auth,email, password)
                .then((userCredential)=>{
                    console.log(userCredential.user)
                });
            navigation('/');
            console.log('User logged in successfully!');
            // 로그인 성공 후 필요한 동작을 수행하세요.

        } catch (error) {
            console.error('Error occurred during login:', error);
            alert(`${error}`);
            // 로그인 실패 시 에러 처리를 수행하세요.
        }
    };
    return (
        <div className={classes.container}>
        <form onSubmit={handleLogin}>
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