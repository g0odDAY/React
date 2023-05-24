import Home from "./components/Home/Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from "./components/Root";
import Market from "./components/Market/Market";
import MarketForm from "./components/Market/MarketForm/MarketForm";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Warning from "./components/Warning/Warning";
import MarketForm1 from "./components/Market/MarketForm/MarketForm1";
import Characters from "./components/Characters/Characters";
import SignupForm from "./components/Login/SignupForm";
import Password from "./components/Login/Password";


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
                        path:'signup',
                        element:<SignupForm/>
                    },
                    {
                        path:'password',
                        element:<Password/>
                    }
                ]

            },
            {
                path:'warning',
                element:<Warning/>
            },
            {
                path:'search/:id',
                element:<Characters/>
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
