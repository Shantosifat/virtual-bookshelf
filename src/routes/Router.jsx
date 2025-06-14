import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                path: '',
                Component: Home
            },
            {
                path:'signIn',
                Component: SignIn
            },
            {
                path:'signUp',
                Component: SignUp
            },
    
        ]
    }
])