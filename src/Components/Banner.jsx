import React from "react";
import img_1 from "../assets/3e4eef6c5dee91668b870828b9cff1d4.jpg";
import img_2 from "../assets/download (1).jpg";
import img_3 from "../assets/pexels-olly-3777559.jpg";
import img_4 from "../assets/istockphoto-1488919446-612x612.jpg";
import img_5 from "../assets/istockphoto-2094339340-612x612.jpg";

const Banner = () => {
  return (
    <div className=" flex  h-[500px] max-w-full bg-linear-to-r from-cyan-500 to-blue-500 my-14  ">
      <div className="flex-1 flex items-center text-center">
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      <div className=" flex-1 relative">
        {" "}
        <img
          src={img_1}
          className="max-w-[200px]  h-[200px] rounded-lg shadow-2xl absolute top-11 left-7"
        />
        <img
          src={img_2}
          className="max-w-[200px]  h-[200px] rounded-lg shadow-2xl absolute top-71 left-27"
        />
        <img
          src={img_3}
          className="max-w-[250px]  h-[250px] rounded-lg shadow-2xl absolute top-20 left-64"
        />
        <img
          src={img_4}
          className="max-w-[200px]  h-[200px] rounded-lg shadow-2xl absolute top-7  right-19"
        />
        <img
          src={img_5}
          className="max-w-[220px]  h-[220px] rounded-lg shadow-2xl absolute  bottom-8  right-6"
        />
      </div>
    </div>
  );
};

export default Banner;
