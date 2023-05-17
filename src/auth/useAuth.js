import React from "react";

const AuthContext = React.createContext({
    onLogout:()=>{},
    onLogin:(e,email,password)=>{},
    onSignup:(e,email,password)=>{},
})

export const useAuth=()=>{
    
}