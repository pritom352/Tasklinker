import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  console.log(show);

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
                  className="relative border border-blue-500 inline-flex items-center  justify-center px-6 py-3  overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group"
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
