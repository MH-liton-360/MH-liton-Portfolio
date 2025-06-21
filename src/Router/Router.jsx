import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import Error from "../Components/Error";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default Router;