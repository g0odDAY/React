import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Footer from "./Footer";

const Layout = ({children})=>{
    return <div className={classes.container}>
        <MainNavigation/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
}
export default Layout;