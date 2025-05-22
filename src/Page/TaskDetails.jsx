import React from "react";
import { useLoaderData } from "react-router";

const TaskDetails = () => {
  const taskDetails = useLoaderData();
  const { budget, category, deadline, descriptionry, task } = taskDetails;
  return (
    <div className="mt-15">
      <h1 className=" text-5xl font-bold italic text-center">
        Task <span className=" text-blue-500">Details</span>
      </h1>
      <div className="  p-6 rounded-2xl shadow-2xl space-y-7 mt-10">
        <div className=" flex justify-between">
          <div>
            <h3 className=" font-bold">Task Name:</h3>
            <h3>{task}</h3>
          </div>
          <div>
            <h3 className=" font-bold">Category:</h3>
            <h3>{category}</h3>
          </div>
        </div>
        <div>
          <h1 className="font-bold">Descriptionry:</h1>
          <p className=" text-justify ">{descriptionry}</p>
        </div>
        <div className=" flex justify-between">
          <div>
            <h3 className=" font-bold">Budget:</h3>
            <h3>{budget} TK</h3>
          </div>
          <div>
            <h3 className=" font-bold">Deadline:</h3>
            <h3>{deadline}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
