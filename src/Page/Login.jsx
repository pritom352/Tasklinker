import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className=" text-3xl font-bold mx-auto  mt-3 text-blue-400  text-shadow-lg ">
        Login <span className=" text-black ">Now</span>
      </h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input  border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button
            // onClick={handelGoogleLogin}
            className=" btn   gap-3 rounded-md  bg-black text-white  font-semibold py-2.5 hover:bg-blue-400 hover:border-none hover:font-bold "
          >
            <FaGoogle size={24} /> Login With Google Login
          </button>
          {/* <button className="btn btn-neutral mt-4">Login</button> */}
          <a
            href="#_"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-[100px] mt-2"
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
              Login
            </span>
          </a>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
