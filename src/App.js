import Home,{eventLoader,calendarLoader} from "./components/Home/Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from "./components/Root";
import BoardForm from "./components/Board/BoardForm";
import BoardRootLayout from "./pages/BoardRootLayout";
import BoardTable from "./components/Board/BoardTable";
import BoardPage,{loader as boardLoader} from "./pages/BoardPage";
import Market from "./components/Market/Market";
import MarketForm from "./components/Market/MarketForm/MarketForm";
import Signin from "./components/Login/Signin";
import Login from "./components/Login/Login";
import Warning from "./components/Warning/Warning";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'market',
                children:[
                    {
                        index:true,
                        element:<Market/>,
                    },
                    {
                        path:'write',
                        element:<MarketForm/>
                    }
                ]
            },
            {
                path:'login',
                children:[
                    {
                        index:true,
                        element:<Login/>
                    },
                    {
                        path:'sign',
                        element:<Signin/>
                    }
                ]

            },
            {
                path:'warning',
                element:<Warning/>
            }
        ],
    },


])
function App() {
  return (
    <>

        <RouterProvider router={router}/>

    </>
  );
}

export default App;
