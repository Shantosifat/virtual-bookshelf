import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen">
      <header className="w-11/12 mx-auto pt-4">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto py-4">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayouts;
