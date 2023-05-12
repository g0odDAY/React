import MainNavigation from "../layout/MainNavigation";
import classes from "./Root.module.css";
import Footer from "../layout/Footer";
import {Outlet} from "react-router-dom";
import React from 'react';
const Root = ()=>{
    return <>
        <MainNavigation/>
        <Outlet/>
        <Footer/>
    </>
}
export default Root;