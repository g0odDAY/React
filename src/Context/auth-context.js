import React, {useCallback, useEffect, useState} from 'react';
import useHttp from "../hooks/use-http";
import {useNavigate} from "react-router-dom";
import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword, fetchSignInMethodsForEmail
} from "firebase/auth";
const AuthContext = React.createContext({
    onLogout:()=>{},
    onLogin:(e,email,password)=>{},
    onSignup:(e,email,password)=>{},
    checkDuplicateEmail:(email)=>{},
})

export const AuthContextProvider =(props)=>{
    const auth = getAuth();
    const navigation = useNavigate();
    const signUpHandler =useCallback( async (e,email,password)=>{
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                fetch('https://curious-furnace-340706-default-rtdb.firebaseio.com/user.json',{
                    method:'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                }).then(res=>res.json())
                    .then(res => console.log('회원가입한 사람 저장',res));
                console.log(user.email);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode+errorMessage);
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
                alert(errorCode+errorMessage);
            })

    },[])
    const checkDuplicateEmail  = async (email)=>{
        await fetchSignInMethodsForEmail(auth, email)
            .then(signInMethods =>{
                if (signInMethods && signInMethods.length > 0) {
                    console.log('중복된 이메일입니다.',false);
                    return false;
                } else {
                    console.log('사용 가능한 이메일입니다.',true);
                    return true;
                }
            }).catch(error=>alert('중복 확인 실패'+error))

    }
    return <AuthContext.Provider value={{onLogin:loginHandler,onLogout:logoutHandler,onSignup:signUpHandler,checkDuplicateEmail}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;