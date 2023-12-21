import {
    createBrowserRouter,
    // RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddTask from "../pages/AddTask/AddTask";


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
                path: "AddTask",
                element: <AddTask></AddTask>,
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
                path: "Registration",
                element: <Registration></Registration>,
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