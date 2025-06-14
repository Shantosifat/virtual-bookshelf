import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import BookShelf from "../components/BookShelf";
import AuthLayouts from "../Layouts/AuthLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "",
        Component: Home,
      },

      {
        path: "bookShelf",
        Component: BookShelf,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "/auth/signIn",
        Component: SignIn,
      },
      {
        path: "/auth/signUp",
        Component: SignUp,
      },
    ],
  },
]);
