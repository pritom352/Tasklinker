import React from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
        <h2 className=" text-3xl font-bold mx-auto  mt-3 text-blue-400  text-shadow-lg ">
          Register <span className=" text-black ">Now</span>
        </h2>
        <div className="card-body">
          <form className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              required
              name="name"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Name"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              required
              name="email"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Email"
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              autoComplete="off"
              required
              name="photoURL"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Photo URL"
            />
            {/* Password */}
            <label className="label">Password</label>
            <div className=" relative">
              <input
                type="password"
                name="currentPassword"
                autoComplete="new-password"
                required
                className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
                placeholder="Password"
              />
              {/* {show ? (
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className=" absolute top-3.5 right-3 z-50"
                >
                  <IoMdEyeOff size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  // onClick={() => setShow(!show)}
                  className=" absolute top-3.5 right-3 z-50"
                >
                  <FaEye size={15} />
                </button>
              )} */}
            </div>

            <a
              href="#_"
              class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-full mt-2"
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-400 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Register
              </span>
            </a>
          </form>
          <button
            // onClick={handelGoogleLogin}
            className=" btn   gap-3 rounded-md  bg-black text-white  font-semibold py-2.5 hover:bg-blue-400 hover:border-none hover:font-bold "
          >
            <FaGoogle size={24} /> Login With Google Login
          </button>
          <p className=" mt-1 ">
            Already have an account ?
            <Link className=" text-blue-500 hover:text-orange-400" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
