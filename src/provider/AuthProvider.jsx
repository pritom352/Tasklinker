import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase_config";
import { ToastContainer } from "react-toastify";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  console.log(user);

  // const data = "hello workd";
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
    // return "hello world";
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(true);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    register,
    googleLogin,
    logIn,
    user,
    logOut,
    loader,
  };
  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
      <ToastContainer />
    </div>
  );
};

export default AuthProvider;
