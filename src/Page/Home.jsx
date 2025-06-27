import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import Card from "../Components/Card";

import Coutnup from "../Components/Coutnup";
import Reviews from "../Components/Reviews";
import BlogSection from "../Components/BlogSection";

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
      <div className=" mt-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-center italic mb-10">
          <span className="text-blue-500">Urgent</span> Tasks
        </h1>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
          {tasks.map((task) => (
            <Card key={task._id} task={task}></Card>
          ))}
        </div>
      </div>
      <Reviews textimonials={textimonials}></Reviews>
      <BlogSection></BlogSection>
      <Coutnup></Coutnup>
    </div>
  );
};

export default Home;
