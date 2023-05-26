import Home from "./components/Home/Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from "./components/Root";
import Exchange from "./components/Exchange/Exchange";
import ExchangeForm from "./components/Exchange/ExchangeForm/ExchangeForm";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Characters from "./components/Characters/Characters";
import SignupForm from "./components/Login/SignupForm";
import Password from "./components/Login/Password";
import Market from "./components/Market/Market";


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
                path:'exchange',
                children:[
                    {
                        index:true,
                        element:<Exchange/>,
                    },
                    {
                        path:'write',
                        element:<ExchangeForm/>
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
                path:'search/:id',
                element:<Characters/>
            },
            {
                path:'market',
                element:<Market/>
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
