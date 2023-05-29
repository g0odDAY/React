import MainNavigation from "../layout/MainNavigation";
import classes from "./Root.module.css";
import Footer from "../layout/Footer";
import {Outlet} from "react-router-dom";
import React from 'react';
import AuthContext, {AuthContextProvider} from "../Context/auth-context";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import Loading from "../ui/Loading";
import LoadingBar from "../ui/LoadingBar";
const queryClient = new QueryClient();
const Root = ()=>{
    return <div className={classes.container}>
            <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <MainNavigation/>
                <Loading/>
                <Outlet/>
                <Footer/>
                <ReactQueryDevtools/>
            </AuthContextProvider>
            </QueryClientProvider>
            </div>
}
export default Root;