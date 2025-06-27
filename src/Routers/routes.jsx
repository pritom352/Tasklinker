import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Page/Login";
import Home from "../Page/Home";
import Register from "../Page/Register";
import AddTask from "../Page/AddTask";
import MyTask from "../Page/MyTask";
import PrivetRoutes from "./PrivetRoutes";
import Loader from "../Components/Loader";
import BrowseTasks from "../Page/BrowseTasks";
import TaskDetails from "../Page/TaskDetails";
import ErrorPage from "../Page/ErrorPage";

import UpdateTask from "../Page/UpdateTask";
import AboutUs from "../Page/AboutUs";
import Contact from "../Page/Contact";
import Support from "../Page/Support";
import DashboardLayout from "../Layout/DashboardLayout";
import Overview from "../Page/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        loader: () =>
          fetch(
            "https://assignment-10-server-one-orcin.vercel.app/tasks/limites"
          ),
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
      },

      { path: "/login", Component: Login },
      { path: "/register", Component: Register },

      {
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/support",
        Component: Support,
      },

      {
        path: "/browseTasks",
        loader: () =>
          fetch("https://assignment-10-server-one-orcin.vercel.app/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: BrowseTasks,
      },
      {
        path: "/taskDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-one-orcin.vercel.app/tasks/${params.id}`
          ),
        hydrateFallbackElement: <Loader></Loader>,

        element: (
          <PrivetRoutes>
            <TaskDetails></TaskDetails>
          </PrivetRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivetRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivetRoutes>
    ),
    children: [
      {
        index: true,
        Component: Overview,
      },
      {
        path: "/dashbord/myPostedTask",
        loader: () =>
          fetch("https://assignment-10-server-one-orcin.vercel.app/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivetRoutes>
            <MyTask></MyTask>
          </PrivetRoutes>
        ),
      },

      {
        path: "/dashbord/addTask",
        element: (
          <PrivetRoutes>
            <AddTask></AddTask>
          </PrivetRoutes>
        ),
      },
      {
        path: "/dashbord/updateTask/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-one-orcin.vercel.app/tasks/${params.id}`
          ),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivetRoutes>
            <UpdateTask></UpdateTask>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
