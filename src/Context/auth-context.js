import React, {useEffect, useState} from 'react';
import useHttp from "../hooks/use-http";
import {useNavigate} from "react-router-dom";
const AuthContext = React.createContext({
    isLogin:false,
    onLogout:()=>{},
    onLogin:(e,email,password)=>{},
    onSignup:(e,email,password)=>{},
})

export const AuthContextProvider = (props)=>{
    const [isLogin,setIsLogin] = useState(false);
    const {sendRequest:fetchRequest} = useHttp();
    const navigation = useNavigate();
    useEffect(()=>{
        // if( localStorage.getItem('userData') !== null){
        //     setUsers(JSON.parse(localStorage.getItem('userData')));
        // }
    },[])
    const signUpHandler =async (e,email,password)=>{
        e.preventDefault();
        await fetchRequest({url:'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7oDJh_w5VbLAE-6hechqvz1RmVqJKzjs',method:'POST',header:{'Content-Type':'application/json'},body:{email,password}},(data)=>data);
        navigation(-1);
    }
    const logoutHandler = async ()=>{
        setIsLogin(false);
        await fetchRequest({url:'https://identitytoolkit.googleapis.com/v1/accounts:signOut?key=AIzaSyC7oDJh_w5VbLAE-6hechqvz1RmVqJKzjs',headers:{'Content-Type':'application/json'},body:{idToken:JSON.parse(localStorage.getItem('userData')).idToken}},()=> localStorage.removeItem('userData'))

        navigation('/');
    }
    const loginHandler = async (e,email,password)=>{
        setIsLogin(prevState => !prevState.isLogin);
        e.preventDefault();
        await fetchRequest({url:'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7oDJh_w5VbLAE-6hechqvz1RmVqJKzjs',method:'POST',headers:{'Content-type':'application/json'},body:{
                email:email,
                password:password,
                returnSecureToken:true
            }},data=>localStorage.setItem("userData", JSON.stringify(data)));

        navigation('/');
    }
    return <AuthContext.Provider value={{isLogin,onLogin:loginHandler,onLogout:logoutHandler,onSignup:signUpHandler}}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;