import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <MoonLoader size={140} color="blue" />
    </div>
  );
};

export default Loader;
