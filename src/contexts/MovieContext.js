import React, { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const value = {
    movies,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};