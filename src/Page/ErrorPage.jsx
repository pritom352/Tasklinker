import React from "react";
import errorimg from ".././assets/Animation - 1749956703540.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-black h-screen">
      <div className="  flex  items-center justify-center  ">
        <Lottie
          className="max-w-[500px]"
          animationData={errorimg}
          loop={true}
        />
      </div>
      <div className=" flex items-center justify-center mt-10">
        <Link to={"/"}>
          <button className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-base-100">Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
