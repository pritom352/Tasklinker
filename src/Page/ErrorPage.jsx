import React from "react";
import errorImg from "../assets/errorPage.jpg";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <div>
          <img className=" mx-auto  w-2xl" src={errorImg} alt="" />
          <div className="  flex justify-center mt-9"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
