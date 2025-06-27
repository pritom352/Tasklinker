import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DashboardLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar />

      {/* Mobile toggle header */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-base-200 shadow-md">
        <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto min-h-screen">
        {/* Sidebar */}
        <aside
          className={`bg-base-200 w-full lg:w-64 shadow-md lg:sticky top-0 p-6 flex flex-col transition-all duration-300 z-10 
          ${isSidebarOpen ? "block" : "hidden"} 
          lg:block`}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>

          {/* Links wrapper with gap */}
          <div className="flex flex-col gap-4">
            <Link
              to="/dashbord"
              className={`p-3 rounded-lg shadow hover:bg-blue-100 flex items-center gap-3 ${
                location.pathname === "/dashbord" ? "bg-blue-300" : ""
              }`}
            >
              <FaTachometerAlt /> Overview
            </Link>

            <Link
              to="/dashbord/myPostedTask"
              className={`p-3 rounded-lg shadow hover:bg-blue-100 flex items-center gap-3 ${
                location.pathname.includes("myPostedTask") ? "bg-blue-300" : ""
              }`}
            >
              <FaTasks /> My Posted Tasks
            </Link>

            <Link
              to="/dashbord/addTask"
              className={`p-3 rounded-lg shadow hover:bg-blue-100 flex items-center gap-3 ${
                location.pathname.includes("addTask") ? "bg-blue-300" : ""
              }`}
            >
              <FaPlus /> Add Task
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
