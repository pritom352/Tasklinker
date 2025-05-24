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
    const email = e.target.email.value;

    const Task = {
      task,
      category,
      descriptionry,
      deadline,
      budget,
      email,
    };
    fetch("https://assignment-10-server-one-orcin.vercel.app/tasks", {
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
          e.target.reset();
        }
      });
  };
  return (
    <div className=" md:mx-10 my-15  lg:mx-30 lg:my-20  ">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl mb-8 font-bold italic text-center text-blue-500">
        Add <span className=" text-black">Task</span>
      </h1>
      <form
        onSubmit={handleAddTask}
        className="space-y-4 p-5   rounded-2xl shadow-2xl"
      >
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between gap-5 md:gap-8 lg:gap-16">
          <div className="  w-full">
            <label className="label font-bold">Task Title</label>
            <input
              type="text"
              required
              name="Task"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Name"
            />
          </div>

          <div className="w-full">
            <label className="label font-bold">Category</label>
            <select
              name="Category"
              required
              defaultValue=""
              className="select validator border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            >
              <option value="" disabled></option>
              <option value="Web Development">Web Development</option>
              <option value="Design">Design</option>
              <option value="Writing">Writing</option>
              <option value="Opera">Opera</option>
              <option value="Marketing">Marketing</option>
            </select>
            <p className="validator-hint">Required</p>
          </div>
        </div>
        <div className=" mb-5 md:mb-8 lg:mb-12">
          <label className="label font-bold">Description</label>

          <textarea
            name="Description"
            required
            className="textarea  border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Description"
          ></textarea>
        </div>
        <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-8 lg:gap-16 ">
          <div className=" w-full">
            <label className="label font-bold">Deadline</label>

            <input
              type="date"
              name="Deadline"
              required
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Description"
            />
          </div>
          <div className=" w-full">
            <label className="label font-bold">Budget</label>

            <input
              type="number"
              required
              name="Budget"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Enter your Budget"
            />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-16 justify-between">
          <div className=" w-full">
            <label className="label font-bold">email</label>

            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""}
              disabled
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Your Email"
            />
          </div>
          <div className=" w-full">
            <label className="label font-bold">name</label>

            <input
              type="text"
              disabled
              defaultValue={user?.displayName || ""}
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Your Name"
            />
          </div>
        </div>
        <button className="flex mx-auto mt-4 md:mt-7 lg:mt-10 items-center justify-center px-4 py-2 md:px-6 md:py-3  lg:px-8 lg:py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
