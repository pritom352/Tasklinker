import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase_config";
import { ToastContainer } from "react-toastify";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  // const data = "hello workd";
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const authData = {
    register,
    googleLogin,
  };
  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
      <ToastContainer />
    </div>
  );
};

export default AuthProvider;
