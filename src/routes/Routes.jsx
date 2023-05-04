import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Layout from "../components/layout/Layout";
import ChefDetail from "../components/chefDetails/ChefDetail";
import LayoutDetail from "../components/layout/LayoutDetail";
import Login from "../components/Login/Login";
import Register from "../components/Registration/Register";
import ErrorPage from "../components/errorPage/ErrorPage";
import Blog from "../components/blog/Blog";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/chefs/:id',
                element:<ChefDetail></ChefDetail>,
                loader:({params})=>fetch(`https://assignment-10-server-leviathans11.vercel.app/chefs/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
   
])

export default router;