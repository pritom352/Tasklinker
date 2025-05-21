import React, { useContext } from "react";
import { Link, Links, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  // const { email } = user;
  // console.log(email);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // toast("Logout successful!");
      })
      .catch((error) => {
        toast(`${error}`);
      });
  };
  const links = (
    <div className="flex gap-4 ">
      <NavLink className="hover:text-orange-500" to="/">
        Home
      </NavLink>
      <NavLink className="hover:text-orange-500" to="/addTask">
        Add Task
      </NavLink>
      <NavLink className="hover:text-orange-500" to="/browseTasks">
        Browse Tasks
      </NavLink>
      <NavLink className="hover:text-orange-500" to="/myPostedTask">
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
        <a className="btn btn-ghost text-2xl font-bold italic">
          <span className=" text-orange-400">Vibe</span>Venue
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* {user && (
          <>
            <img src={user.photoURL} alt="Profile" />
            
          </>
        )} */}
        {!user ? (
          <div>
            <button className="relative mr-2 inline-flex items-center justify-center px-6 py-3 border overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
              <span className="relative">Register</span>
            </button>

            <Link to="/login">
              <button className="relative inline-flex items-center justify-center px-6 py-3 border overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group">
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
                <div className="relative group mr-2">
                  <img
                    className=" rounded-full w-[60px] h-[60px]"
                    src={user.photoURL}
                    alt="Profile"
                  />
                  <div className="absolute  mb-2 left-1/2 -translate-x-1/2 px-2 py-1  text-white text-xs rounded hidden group-hover:block ">
                    <button
                      onClick={handleLogout}
                      className="relative inline-flex items-center justify-center px-6 py-3 border overflow-hidden font-mono font-medium tracking-tighter hover:text-white  rounded-lg group"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500  rounded-full group-hover:w-56  group-hover:h-56"></span>
                      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30  bg-gradient-to-b from-transparent via-transparent  "></span>
                      <span className="relative">Logout</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
