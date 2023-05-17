import {signInWithEmailAndPassword} from "firebase/auth";
import {getAuth} from "firebase/auth";
const auth = getAuth();
const getUser = async (email,password)=>{
    if(!email || !password) return null;
    await signInWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            const user = userCredential.user;
            return user;
        })
}