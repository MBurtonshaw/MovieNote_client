import React, { createContext, useState, useEffect } from "react";
import Data from "../HOCs/Data";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const data = new Data();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const getNowPlaying = async () => {
    try {
      const moviesList = await data.getNowPlaying();
      setMovies(moviesList);
      setError(null); 
    } catch (error) {
      console.error("Error fetching current movies:", error);
      setError(error.message || "Failed to load movies.");
    }
  };

  const getComingSoon = async () => {
    try {
      const moviesList = await data.getComingSoon();
      setMovies(moviesList);
      setError(null); 
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      setError(error.message || "Failed to load movies.");
    }
  };

  const value = {
    movies,
    error,
    actions: {
        getNowPlaying,
        getComingSoon
    }
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};