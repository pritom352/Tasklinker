import React from "react";

const MyTaskCard = ({ data, index }) => {
  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td className="text-center">{data.task}</td>
      <td className="text-center">{data.category}</td>
      <td className="text-center">{data.budget}</td>
      <td className=" flex justify-center items-center">
        <div className="flex gap-5">
          <button className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Update</span>
          </button>
          <button className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyTaskCard;
