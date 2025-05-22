import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const upDateTask = useLoaderData();
  console.log(upDateTask);
  const { user } = useContext(AuthContext);
  const handleUpdateTask = (e) => {
    e.preventDefault();
    const task = e.target.Task.value;
    const category = e.target.Category.value;
    const descriptionry = e.target.Description.value;
    const deadline = e.target.Deadline.value;
    const budget = e.target.Budget.value;
    const email = e.target.email.value;
    // console.log(email);
    const Task = {
      task,
      category,
      descriptionry,
      deadline,
      budget,
      email,
    };
    fetch(`http://localhost:3000/tasks/${upDateTask._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          Swal.fire({
            title: "Task added successfully",
            icon: "success",
            draggable: true,
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="   mx-30 my-20  ">
      <form
        onSubmit={handleUpdateTask}
        className="space-y-4 p-5   rounded-2xl shadow-2xl"
      >
        <div className=" flex justify-between  gap-16">
          <div className="  w-full">
            <label className="label font-bold">Task Title</label>
            <input
              type="text"
              required
              name="Task"
              defaultValue={upDateTask.task}
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Name"
            />
          </div>

          <div className="w-full">
            <label className="label font-bold">Category</label>

            <select
              defaultValue={upDateTask.category}
              name="Category"
              className="select validator  border-0 border-b-2  rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            >
              {/* <option disabled={true}>Pick a font</option> */}
              <option>Web Development</option>
              <option>Design</option>
              <option>Writing</option>
              <option>Opera</option>
              <option>Marketing</option>
            </select>

            <p className="validator-hint">Required</p>
          </div>
        </div>
        <div className=" mb-12">
          <label className="label font-bold">Description</label>

          <textarea
            name="Description"
            defaultValue={upDateTask.description}
            className="textarea  border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
            placeholder="Description"
          ></textarea>
        </div>
        <div className=" flex justify-between gap-16 ">
          <div className=" w-full">
            <label className="label font-bold">Deadline</label>

            <input
              type="date"
              name="Deadline"
              defaultValue={upDateTask.deadline}
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Description"
            />
          </div>
          <div className=" w-full">
            <label className="label font-bold">Budget</label>

            <input
              type="number"
              defaultValue={upDateTask.budget}
              required
              name="Budget"
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Enter your Budget"
            />
          </div>
        </div>
        <div className=" flex gap-16 justify-between">
          <div className=" w-full">
            <label className="label font-bold">email</label>

            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""} // safe fallback
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
              defaultValue={user?.displayName || ""} // safe fallback
              className="input border-0 border-b-2 rounded-b-none focus:rounded focus:border-2 focus:border-blue-500 text-black font-semibold focus:bg-blue-300 focus:text-white w-full"
              placeholder="Your Name"
            />
          </div>
        </div>
        <button className="flex mx-auto mt-10 items-center justify-center px-8 py-4 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-blue-500 hover:text-white hover:border-white focus:outline-none">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
