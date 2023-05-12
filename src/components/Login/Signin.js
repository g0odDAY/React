import {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from '../../firebaseConfig';
import classes from './Signin.module.css';
import {useNavigate} from "react-router-dom";
// Firebase 인증 객체
const auth = getAuth(app);
const Signin = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate();
    const onChange = (event) => {
        const {
            target: { name, value }
        } = event
        if (name === 'email') {
            setEmail(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(userCredential=>{
                    console.log(userCredential.user);
                });
            navigation('/');
            console.log('User signed up successfully!');
            // 회원가입 성공 후 필요한 동작을 수행하세요.
        } catch (error) {
            console.error('Error occurred during signup:', error);
            // 회원가입 실패 시 에러 처리를 수행하세요.
        }
    }

    return (
        <div className={classes.container}>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    required
                />
                <input type="submit" value="Log-In" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
}
export default Signin;