import MainNavigation from "../layout/MainNavigation";
import classes from "./Root.module.css";
import Footer from "../layout/Footer";
import {Outlet} from "react-router-dom";
import React from 'react';
import AuthContext, {AuthContextProvider} from "../Context/auth-context";
const Root = ()=>{
    return <>
            <AuthContextProvider>
                <MainNavigation/>
                <Outlet/>
                <Footer/>
            </AuthContextProvider>
            </>
}
export default Root;