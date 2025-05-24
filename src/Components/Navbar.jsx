import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  // console.log(show);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        toast(`${error}`);
      });
    setShow(!show);
  };
  const links = (
    <div className="flex gap-4 ">
      <NavLink className="hover:text-blue-500" to="/">
        Home
      </NavLink>
      <NavLink className="hover:text-blue-500" to="/addTask">
        Add Task
      </NavLink>
      <NavLink className="hover:text-blue-500" to="/browseTasks">
        Browse Tasks
      </NavLink>
      <NavLink className="hover:text-blue-500" to="/myPostedTask">
        My Posted Tasks
      </NavLink>
    </div>
  );
  // theme
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h1 className=" text-2xl font-bold italic text-blue-500">
          Task<span className=" text-black">Linker</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <label className="swap  mr-5 swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onClick={handleToggle}
            type="checkbox"
            checked={theme === "light" ? false : true}
          />

          {/* sun icon */}
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {!user ? (
          <div>
            <Link to="/register">
              <button className="relative mr-2 inline-flex items-center justify-center px-6 py-3  overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
                <span className="relative">Register</span>
              </button>
            </Link>

            <Link to="/login">
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
                <span className="relative">Login</span>
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {user && (
              <>
                <div
                  onClick={() => setShow(!show)}
                  className="  rounded-full mr-2"
                >
                  <img
                    className=" rounded-full w-[60px] h-[60px]"
                    src={user.photoURL}
                    alt="Profile"
                  />
                </div>
              </>
            )}
          </div>
        )}
        {show && (
          <div className=" p-3 z-100  shadow-2xl   space-y-1 absolute top-20 duration-1000 text-xs rounded-2xl    ">
            {user && (
              <div>
                <h1>
                  <span className=" text-blue-500 text-shadow-2xs">Name:</span>{" "}
                  {user.displayName}
                </h1>

                <h1>
                  <span className=" text-blue-500 text-shadow-2xs">
                    Email:{" "}
                  </span>
                  {user.email}
                </h1>
                <button
                  onClick={handleLogout}
                  className="relative border text-black border-blue-500 inline-flex items-center  justify-center px-6 py-3  overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
                  <span className="relative">Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
