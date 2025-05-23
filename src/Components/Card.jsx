import React from "react";

const Card = ({ task }) => {
  return (
    <div className=" ">
      <div className=" rounded-2xl shadow-2xl p-5 space-y-2">
        <h1>
          <span className=" font-bold">Title:</span> {task.task}
        </h1>
        <h1>
          <span className=" font-bold">Category:</span> {task.category}
        </h1>

        <div>
          <h2 className=" font-bold">Descriptionry:</h2>
          <p className=" h-[150px] overflow-y-scroll">{task.descriptionry}</p>
        </div>
        <div className=" flex justify-between">
          <h3>
            <span className=" font-bold">Deadline:</span> Deadline:
            {task.deadline}
          </h3>
          <h3>
            <span className=" font-bold">Budget:</span> {task.budget}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
