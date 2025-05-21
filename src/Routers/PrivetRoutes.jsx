import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate } from "react-router";
import Loader from "../Components/Loader";

const PrivetRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (!loader) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivetRoutes;
