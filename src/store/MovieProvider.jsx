import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
// import { useUserProvider } from './UserProvider';
import { useAPI } from '../api/api';

const MovieContext = createContext();

export const useMovieProvider = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const api = useAPI();
  const [movies, setMovies] = useState(null);
  const [currentList, setCurrentList] = useState(null);
  const [showTable, setShowTable] = useState(true);
  // const auth = useUserProvider();

  const moviesUpdate = (arrayMovieObjects) => {
    setMovies(arrayMovieObjects);
  };

  // const config = {
  //   headers: { Authorization: `Bearer ${jwt}` },
  // };

  // const bodyParameters = {
  //   key: 'value',
  // };

  // Axios.post(`${process.env.REACT_APP_API_URL}/movie`, bodyParameters, config).then(console.log).catch(console.log);

  const allUserAddedMovies = async () => {
    // const movie = await axios.get(`${process.env.REACT_APP_API_URL}/movie`);
    // const movie = await axios.post(`${process.env.REACT_APP_API_URL}/movie`, bodyParameters, config);
    console.log('reached allUserAddedMovies');
    // console.log(token);

    // const movie = await axios.get(`${process.env.REACT_APP_API_URL}/movie`, {
    //   headers: { Authorization: `Bearer ${auth.token}` },
    // });
    const movie = await api.get('/movie');
    console.log(movie.data);
    setMovies(movie.data);
  };
  const value = { movies, currentList, showTable, moviesUpdate, allUserAddedMovies, setCurrentList, setShowTable };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
