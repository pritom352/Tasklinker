import React from "react";
import Navbar from "../Components/Navbar";

import { Outlet } from "react-router";
import Footer from "../Components/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" max-w-6/7 mx-auto min-h-[calc(100vh-360.8px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
