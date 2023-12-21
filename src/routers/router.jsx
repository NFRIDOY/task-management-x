import {
    createBrowserRouter,
    // RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>
            },
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>
            },
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>
            },
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>
            },
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>
            },
            {
                path: "Login",
                element: <Login></Login>,
                errorElement: <Error></Error>
            },
        ]
    },
]);

export default router;