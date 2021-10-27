import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const MovieContext = createContext();

export const useMovieProvider = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [currentList, setCurrentList] = useState(null);
  const [showTable, setShowTable] = useState(true);

  const moviesUpdate = (arrayMovieObjects) => {
    setMovies(arrayMovieObjects);
  };

  const allUserAddedMovies = async () => {
    const movie = await axios.get(`${process.env.REACT_APP_API_URL}/movie`);
    console.log(movie.data);
    setMovies(movie.data);
  };
  const value = { movies, currentList, showTable, moviesUpdate, allUserAddedMovies, setCurrentList, setShowTable };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
