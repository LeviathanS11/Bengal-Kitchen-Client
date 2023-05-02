import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Layout from "../components/layout/Layout";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default router;