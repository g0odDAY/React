import {useContext, useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {app} from '../../firebaseConfig';
import classes from './Signin.module.css';
import AuthContext from "../../Context/auth-context";

// Firebase 인증 객체
const auth = getAuth(app);
const Signin = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const ctx = useContext(AuthContext);

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



    return (
        <div className={classes.container}>
            <form onSubmit={(e)=>ctx.onSignup(e,email,password)}>
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
                <input type="submit" value="sign-In" />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
}
export default Signin;