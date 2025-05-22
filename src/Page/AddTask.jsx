import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = e.target.Task.value;
    const category = e.target.Category.value;
    const descriptionry = e.target.Description.value;
    const deadline = e.target.Deadline.value;
    const budget = e.target.Budget.value;
    const Task = {
      task,
      category,
      descriptionry,
      deadline,
      budget,
    };
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Task added successfully",
            icon: "success",
            draggable: true,
          });
        }
        // console.log(data);
      });
  };
  return (
    <div className="   mx-auto my-20 ">
      <form
        onSubmit={handleAddTask}
        className="space-y-4 p-3   rounded-2xl shadow-2xl"
      >
        <div>
          <label className="label font-bold">Task Title</label>
          <input
            type="text"
            required
            name="Task"
            className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Name"
          />
        </div>

        <div>
          <label className="label font-bold">Category</label>

          <select
            className="select validator  border-0 border-b-2  rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            // required
            // placeholder="Select Category"
            name="Category"
          >
            <option disabled selected value=""></option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Writing</option>
            <option>Opera</option>
            <option>Marketing</option>
          </select>
          <p className="validator-hint">Required</p>
        </div>
        <div>
          <label className="label font-bold">Description</label>
          <input
            type="text"
            required
            name="Description"
            className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Description"
          />
        </div>
        <div>
          <label className="label font-bold">Deadline</label>

          <input
            type="date"
            name="Deadline"
            className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Description"
          />
        </div>
        <div>
          <label className="label font-bold">Budget</label>

          <input
            type="number"
            required
            name="Budget"
            className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Enter your Budget"
          />
        </div>
        <div>
          <label className="label font-bold">email</label>

          <input
            type="email"
            value={user?.email || ""} // safe fallback
            disabled
            className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="label font-bold">name</label>

          <input
            type="text"
            disabled
            value={user?.displayName || ""} // safe fallback
            className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Your Name"
          />
        </div>
        <button class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
