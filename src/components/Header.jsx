import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Log Out Successful!");
        navigate("/auth/signIn");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="flex justify-between items-center bg-base-100 shadow-sm">
      <div className="">
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
            <li>
              <Link to="/" className="font-semibold mb-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bookShelfs" className="font-semibold">
                BookShelf
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/addBook" className="font-semibold mb-2">
                    Add Book
                  </Link>
                </li>
                <li>
                  <Link to="/myBooks" className="font-semibold mb-2">
                    My Books
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="font-semibold mb-2">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/auth/signIn">
                    {" "}
                    <button className="btn btn-warning" onClick={handleLogOut}>
                      LogOut
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex pl-3 justify-center items-center pb-2">
          <img src={logo} className="w-10" alt="" />
          <a className="btn btn-ghost text-xl">Libree</a>
        </div>
      </div>
      <div className="">
        <ul className="menu menu-horizontal px-1 items-center gap-4">
          <li>
            <Link to="/" className="font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bookShelfs" className="font-semibold">
              BookShelf
            </Link>
          </li>
          <li>
            <Link to="/addBook" className="font-semibold ">
              Add Book
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/myBooks" className="font-semibold ">
                  My Books
                </Link>
              </li>
              <li>
                <Link to="/profile" className="font-semibold ">
                  Profile
                </Link>
              </li>

              {user && (
                <div className="flex justify-around items-center gap-2">
                  {user?.photoURL && (
                    <img
                      src={user.photoURL}
                      referrerPolicy="no-referrer"
                      className="w-8 rounded-full hidden md:flex"
                      alt=""
                    />
                  )}
                  <Link to="/auth/signIn">
                    {" "}
                    <button className="btn btn-warning" onClick={handleLogOut}>
                      LogOut
                    </button>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <>
              <li>
                <Link to="/auth/signIn">
                  <a className="btn btn-primary ">Log In</a>
                </Link>
              </li>
              <li>
                <Link to="/auth/signUp">
                  <a className="btn btn-secondary">Sign Up</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
