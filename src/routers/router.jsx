import {
    createBrowserRouter,
    // RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
]);

export default router;