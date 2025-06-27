import React from "react";
import { Link } from "react-router";

const Card = ({ task }) => {
  const shortDescription =
    task.descriptionry?.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-between rounded-2xl shadow-2xl p-5 space-y-3 bg-base-200">
        <div>
          <h1>
            <span className="font-bold">Title:</span> {task.task}
          </h1>
          <h1>
            <span className="font-bold">Category:</span> {task.category}
          </h1>
        </div>

        <div className="flex-1">
          <h2 className="font-bold mb-1">Description:</h2>
          <p className="text-gray-700 text-sm">{shortDescription}</p>
        </div>

        <div className="pt-4">
          <Link to={`/taskDetails/${task._id}`}>
            <button className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-base-100">
                Show More
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
