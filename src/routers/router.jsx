import {
    createBrowserRouter,
    // RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddTask from "../pages/AddTask/AddTask";
import PrivateRoute from './PrivateRoute';
import Tasks from "../pages/Tasks/Tasks";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                errorElement: <Error></Error>
            },
            {
                path: "AddTask",
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
                errorElement: <Error></Error>
            },
            {
                path: "Tasks",
                element: <PrivateRoute><Tasks></Tasks></PrivateRoute>,
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