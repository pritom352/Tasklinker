import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Page/Login";
import Home from "../Page/Home";
import Register from "../Page/Register";
import AddTask from "../Page/AddTask";
import MyTask from "../Page/MyTask";
import PrivetRoutes from "./PrivetRoutes";
import Loader from "../Components/Loader";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/addTask", Component: AddTask },
      {
        path: "/myPostedTask",
        element: (
          <PrivetRoutes>
            <MyTask></MyTask>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
