import React from "react";

const AllTask = ({ task, index }) => {
  console.log(task);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.task}</td>
      <td>{task.category}</td>
      <td>{task.budget}</td>
      <td>
        <button class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
          <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
          <span class="relative group-hover:text-white">Details</span>
        </button>
      </td>
    </tr>
  );
};

export default AllTask;
