import React from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const Reviews = ({ textimonials }) => {
  return (
    <div className="mt-20">
      <h1 className=" mb-8 text-2xl md:text-3xl lg:text-4xl italic font-bold text-center text-shadow-2xs">
        <span className=" text-blue-500">User</span>Reviews
      </h1>
      <div className="flex gap-5 items-center ">
        <Marquee>
          {textimonials.map((data) => (
            <ReviewCard key={data.name} data={data}></ReviewCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
