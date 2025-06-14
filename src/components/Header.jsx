import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    // <div className="navbar bg-base-100 shadow-sm">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           {" "}
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />{" "}
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //       >
    //         <div className="navbar-center hidden lg:flex gap-4">
    //           <Link to="/" className="font-semibold">
    //             Home
    //           </Link>
    //           <Link className="font-semibold">BookShelf</Link>
    //         </div>
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl">daisyUI</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex gap-4">
    //     <Link to="/" className="font-semibold">
    //       Home
    //     </Link>
    //     <Link className="font-semibold">BookShelf</Link>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Button</a>
    //   </div>
    // </div>
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to='/' className="font-semibold mb-2">Home</Link>
            <Link className="font-semibold">BookShelf</Link>
           
          </ul>
        </div>
        <div className="flex items-center">
            <img src={logo} className="w-10" alt="" />
            <a className="btn btn-ghost text-xl">Libree</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
         <Link to='/' className="font-semibold">Home</Link>
            <Link className="font-semibold">BoofShelf</Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/signIn'><a className="btn btn-primary mr-2">Log In</a></Link>
        <Link to='/signUp'><a className="btn btn-secondary">Sign Up</a></Link>
      </div>
    </div>
  );
};

export default Header;
