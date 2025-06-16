import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Footer from "../components/Footer";
import BookShelf from "../components/BookShelf";
import AuthLayouts from "../Layouts/AuthLayouts";
import PrivateRoute from "../Provider/PrivateRoute";
import AddBook from "../components/AddBook";
import MyBooks from "../components/MyBooks";
import Profile from "../components/Profile";
import axios from "axios";
import BookDetails from "../components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/books`),
        Component: Home,
      },

      {
        path: "bookShelf",
        Component: BookShelf,
      },
      {
        path: "addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:id",
        Component: BookDetails
      },
      {
        path: "myBooks",
        element: (
          <PrivateRoute>
            <MyBooks></MyBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
