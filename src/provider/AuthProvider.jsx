import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase_config";
import { ToastContainer } from "react-toastify";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const [loader, setLoader] = useState(false);
  console.log(user);

  const register = (email, password) => {
    setLoader(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoader(false);
    return signInWithPopup(auth, provider);
  };
  const logIn = (email, password) => {
    setLoader(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoader(false);
    return signOut(auth);
  };
  const updateUser = (updateItem) => {
    setLoader(false);
    return updateProfile(auth.currentUser, updateItem);
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
    updateUser,
    setUser,
  };
  return (
    <div>
      <AuthContext value={authData}>{children}</AuthContext>
      <ToastContainer />
    </div>
  );
};

export default AuthProvider;
