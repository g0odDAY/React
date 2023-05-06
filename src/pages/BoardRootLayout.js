import {Outlet} from "react-router-dom";
import BoardNavigation from "../components/Board/BoardNavigation";

const BoardRootLayout = ()=>{
    return <>

        <Outlet/>
    </>
}
export default BoardRootLayout;