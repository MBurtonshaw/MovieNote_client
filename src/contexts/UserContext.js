import React, { createContext, useState, useEffect } from "react";
import Data from "../HOCs/Data";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });
  const [error, setError] = useState(null);
  const data = new Data();

  // Login User
  async function loginUser(credentials) {
    try {
      let loggedUser = await data.loginUser(credentials);
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser)); // Persist user
      setError(null); // Clear previous errors if login is successful
    } catch (e) {
      setError(e.message);
    }
  }

  async function registerUser(credentials) {
    try {
      await data.registerUser(credentials); // API call (no setUser)
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  // Logout User
  function logoutUser() {
    setUser(null);
    localStorage.removeItem("user"); // Clear stored user
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const value = {
    user,
    error,
    actions: {
      loginUser,
      logoutUser,
      registerUser
    }
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};