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
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/tasks/limites"),
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/addTask", Component: AddTask },
      {
        path: "/browseTasks",
        loader: () => fetch("http://localhost:3000/tasks"),
        Component: BrowseTasks,
      },
      {
        path: "/taskDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tasks/${params.id}`),
        Component: TaskDetails,
      },
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
