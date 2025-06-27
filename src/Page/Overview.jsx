import React, { useContext, useEffect, useState } from "react";
import { FaTasks, FaListAlt, FaUser } from "react-icons/fa";
import Loader from "../Components/Loader";
import { AuthContext } from "../provider/AuthContext";

const Overview = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const [totalTask, setTotalTask] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-one-orcin.vercel.app/tasks")
      .then((res) => res.json())
      .then((result) => {
        setTotalTask(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const myAllData = totalTask.filter((data) => data.email == user?.email);

  return (
    <div className="space-y-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-md transition flex items-center gap-4">
          <FaTasks className="text-4xl text-purple-500" />
          <div>
            <p className="text-lg font-semibold">Total Tasks</p>
            <p className="text-2xl text-blue-600 font-bold">
              {totalTask ? totalTask.length : <Loader></Loader>}
            </p>
          </div>
        </div>

        <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-md transition flex items-center gap-4">
          <FaListAlt className="text-4xl text-green-500" />
          <div>
            <p className="text-lg font-semibold">My Tasks</p>
            <p className="text-2xl text-blue-600 font-bold">
              {myAllData ? myAllData.length : <Loader></Loader>}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-xl mb-20 pt-10  pb-50 relative">
        {/* User Card */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full -translate-y-1/2 w-full max-w-2xl px-4">
          <div className="bg-base-200 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center space-y-4">
            {/* User Image */}
            <img
              src={
                user?.photoURL || "https://i.ibb.co/6ZzG8bL/default-avatar.png"
              }
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-white shadow object-cover -mt-20"
            />

            {/* User Info */}
            <h2 className="text-2xl font-bold text-blue-700">
              {user?.displayName || "Anonymous User"}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
            <p>
              <span className="font-semibold text-gray-800">Joined:</span>{" "}
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString()
                : "N/A"}
            </p>
            <p>
              <span className="font-semibold text-gray-800">
                Total Posted Tasks:
              </span>{" "}
              {myAllData.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
