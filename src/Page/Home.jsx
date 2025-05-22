import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";
import CountUp from "react-countup";
import Coutnup from "../Components/Coutnup";

const Home = () => {
  const tasks = useLoaderData();
  console.log(tasks);
  return (
    <div>
      <Banner></Banner>
      <div className=" my-16">
        <h1 className=" text-5xl text-blue-500 font-bold text-center italic mb-10">
          Urgent <span className="text-black">Tasks</span>
        </h1>
        <div className=" grid grid-cols-3  gap-10">
          {tasks.map((task) => (
            <Card key={task._id} task={task}></Card>
          ))}
        </div>
      </div>
      <Coutnup></Coutnup>
    </div>
  );
};

export default Home;
