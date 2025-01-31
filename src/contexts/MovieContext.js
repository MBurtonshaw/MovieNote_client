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

  const getMoviesByGenre = async (genre) => {
    try {
      const moviesList = await data.getMoviesByGenre(genre);
      setMovies(moviesList);
      setError(null); 
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      setError(error.message || "Failed to load movies.");
    }
  };

  const getTopRated = async () => {
    try {
      const moviesList = await data.getTopRated();
      setMovies(moviesList);
      setError(null); 
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      setError(error.message || "Failed to load movies.");
    }
  };

  const searchMovies = async (query) => {
    try {
      const moviesList = await data.search(query);
      setMovies(moviesList);
      setError(null); 
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      setError(error.message || "Failed to load movies.");
    }
  };

  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}


  const value = {
    movies,
    error,
    actions: {
        getNowPlaying,
        getComingSoon,
        capitalizeFirstLetter,
        getMoviesByGenre,
        getTopRated,
        searchMovies
    }
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};