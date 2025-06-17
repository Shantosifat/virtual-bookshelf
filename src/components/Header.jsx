import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // FIXED: from "react-router" to "react-router-dom"
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext); // FIXED: useContext instead of use()
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For hamburger menu toggle
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Log Out Successful!");
        navigate("/auth/signIn");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Extracted Nav Items
  const navLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/bookShelfs">BookShelf</Link></li>
      {user && (
        <>
          <li><Link to="/addBook">Add Book</Link></li>
          <li><Link to="/myBooks">My Books</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm px-20 py-5 fixed top-0 left-0 w-full z-50">

      {/* Header Container */}
      <div className="flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10" alt="logo" />
          <Link to="/" className="text-xl font-bold">Libree</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-4">
          <ul className="menu menu-horizontal px-1 items-center gap-3 font-semibold">
            {navLinks}
          </ul>
          {user ? (
            <div className="flex items-center gap-3">
              {user.photoURL && (
                <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full" />
              )}
              <button className="btn btn-warning" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/auth/signIn" className="btn btn-primary">Log In</Link>
              <Link to="/auth/signUp" className="btn btn-secondary">Sign Up</Link>
            </div>
          )}
        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 bg-base-100 p-4 rounded shadow space-y-3 animate-slide-down">
          <ul className="space-y-2 font-semibold">{navLinks}</ul>
          {user ? (
            <div className="space-y-2">
              {user.photoURL && (
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL}
                    alt="user"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.displayName}</span>
                </div>
              )}
              <button className="btn btn-warning w-full" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/auth/signIn" className="btn btn-primary w-full">Log In</Link>
              <Link to="/auth/signUp" className="btn btn-secondary w-full">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
