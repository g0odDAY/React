import React, {useCallback, useEffect, useState} from 'react';
import useHttp from "../hooks/use-http";
import {useNavigate} from "react-router-dom";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword
} from "firebase/auth";
const AuthContext = React.createContext({
    onLogout:()=>{},
    onLogin:(e,email,password)=>{},
    onSignup:(e,email,password)=>{},
})

export const AuthContextProvider =(props)=>{
    const auth = getAuth();
    const navigation = useNavigate();
    const signUpHandler =useCallback( async (e,email,password)=>{
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                console.log(user.email);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        navigation(-1);
    },[])
    const logoutHandler = useCallback(async ()=>{
        await signOut(auth).then(()=>{
            console.log('로그아웃 성공~!');
            localStorage.removeItem('userData');

        }).catch(error=>{

        })
        navigation('/');

    },[])
    const loginHandler = useCallback( async (e,email,password)=>{

        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
            .then(userCredential=>{
                const user = userCredential.user;
                localStorage.setItem('userData',JSON.stringify(user));
                console.log('login 성공 했을때 ', user);
                navigation('/');
            })
            .catch(error=>{
                const errorCode = error.code;
                const errorMessage = error.message;
            })

    },[])
    return <AuthContext.Provider value={{onLogin:loginHandler,onLogout:logoutHandler,onSignup:signUpHandler}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;