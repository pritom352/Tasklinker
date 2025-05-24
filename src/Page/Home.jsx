import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";

import Coutnup from "../Components/Coutnup";
import Reviews from "../Components/Reviews";

const Home = () => {
  const tasks = useLoaderData();
  const [textimonials, setTextimonials] = useState([]);

  useEffect(() => {
    fetch("revew.json")
      .then((res) => res.json())
      .then((data) => {
        setTextimonials(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className=" my-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-500 font-bold text-center italic mb-10">
          Urgent <span className="text-black">Tasks</span>
        </h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-10">
          {tasks.map((task) => (
            <Card key={task._id} task={task}></Card>
          ))}
        </div>
      </div>
      <Reviews textimonials={textimonials}></Reviews>
      <Coutnup></Coutnup>
    </div>
  );
};

export default Home;
