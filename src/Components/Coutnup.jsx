import React from "react";
import CountUp from "react-countup";

const Coutnup = () => {
  return (
    <div className=" flex flex-col items-center shadow-2xl mt-20 rounded-2xl">
      <h4 className="  italic text-blue-500 sm:mt-16 mb-5 text-2xl  pt-3   md:text-3xl lg:text-4xl font-extrabold text-center">
        Connecting Talent <span className=" text-black">with Opportunity</span>
      </h4>

      <div className=" grid  md:grid-cols-2 lg:grid-cols-3  sm:mx-0 max-w-3/5     gap-5 mt-8 mb-20">
        <div
          className="  shadow-2xl
         rounded-2xl p-10 space-y-4"
        >
          <div className=" flex gap-1 justify-center items-center">
            <CountUp
              className=" text-2xl md:text-3xl lg:text-4xl font-bold"
              enableScrollSpy={true}
              duration={5}
              end={1179}
            />
            <p className="  text-2xl md:text-3xl lg:text-4xl font-bold">+</p>
          </div>
          <p className=" text-center">Jobs Posted</p>
        </div>
        <div
          className="  shadow-2xl
         rounded-2xl p-10 space-y-4"
        >
          <div className=" flex gap-1 items-center">
            <CountUp
              className="  text-2xl md:text-3xl lg:text-4xl font-bold"
              enableScrollSpy={true}
              duration={7}
              end={26754}
            />
            <p className=" text-2xl md:text-3xl lg:text-4xlfont-bold">+</p>
          </div>
          <p className=" text-center">Tasks Posted</p>
        </div>
        <div
          className="  shadow-2xl
         rounded-2xl p-10 space-y-4"
        >
          <div className=" flex gap-1 items-center">
            <CountUp
              className="  text-2xl md:text-3xl lg:text-4xl font-bold"
              enableScrollSpy={true}
              duration={10}
              end={19000}
            />
            <p className="  text-2xl md:text-3xl lg:text-4xl font-bold">+</p>
          </div>
          <p className=" text-center">Freelancers</p>
        </div>
      </div>
    </div>
  );
};

export default Coutnup;
