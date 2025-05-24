import React from "react";
import { useLoaderData } from "react-router";
import AllTask from "../Components/AllTask";

const BrowseTasks = () => {
  const tasks = useLoaderData();

  return (
    <div>
      <h1 className=" text-3xl md:text-4xl lg:text-5xl text-blue-500 italic font-bold mt-10 mb-2 text-center">
        ALL <span className=" text-black">Task</span>
      </h1>
      <div className="divider mb-20"></div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-10 shadow-2xl">
        <table className="table">
          <thead>
            <tr>
              <th>no</th>
              <th>Task Name</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <AllTask task={task} key={task._id} index={index}></AllTask>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTasks;
