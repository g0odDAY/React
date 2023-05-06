import MainNavigation from "../layout/MainNavigation";
import classes from "./Root.module.css";
import Footer from "../layout/Footer";
import {Outlet} from "react-router-dom";

const Root = ()=>{
    return <>
        <MainNavigation/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
}
export default Root;