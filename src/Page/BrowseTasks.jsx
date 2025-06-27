import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import AllTask from "../Components/AllTask";

const BrowseTasks = () => {
  const tasks = useLoaderData();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCategory, setFilterCategory] = useState("");
  // console.log(tasks);

  useEffect(() => {
    let updatedTasks = [...tasks];

    // Filtering
    if (filterCategory) {
      updatedTasks = updatedTasks.filter(
        (task) => task.category === filterCategory
      );
    }

    // Sorting
    if (sortField) {
      updatedTasks.sort((a, b) => {
        if (sortField === "budget") {
          return sortOrder === "asc"
            ? a.budget - b.budget
            : b.budget - a.budget;
        } else {
          const aVal = a[sortField].toLowerCase();
          const bVal = b[sortField].toLowerCase();
          return sortOrder === "asc"
            ? aVal.localeCompare(bVal)
            : bVal.localeCompare(aVal);
        }
      });
    }

    setFilteredTasks(updatedTasks);
  }, [tasks, sortField, sortOrder, filterCategory]);

  return (
    <div className="px-4 sm:px-8 lg:my-20 shadow-2xl rounded-2xl py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl  italic font-bold text-center mt-6 mb-4">
        <span className="text-blue-500">ALL</span> Task
      </h1>
      <div className="divider mb-10"></div>

      {/* Filter & Sort Controls */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        {/* Filter by Category */}
        <select
          onChange={(e) => setFilterCategory(e.target.value)}
          value={filterCategory}
          className="select select-bordered"
        >
          <option value="">All Categories</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Web Development">Web Development</option>
          <option value="Marketing">Marketing</option>
        </select>

        {/* Sort Field */}
        <select
          onChange={(e) => setSortField(e.target.value)}
          value={sortField}
          className="select select-bordered"
        >
          <option value="">Sort By</option>
          <option value="task">Task Name</option>
          <option value="category">Category</option>
          <option value="budget">Budget</option>
        </select>

        {/* Sort Order */}
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="select select-bordered"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-2xl">
        <table className="table bg-base-200">
          <thead>
            <tr>
              <th>No</th>
              <th>Task Name</th>
              <th>Category</th>
              <th>Budget</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <AllTask task={task} key={task._id} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTasks;
