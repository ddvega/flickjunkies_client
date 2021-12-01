/* eslint-disable no-return-assign */
import React, { useContext, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { useAPI } from '../api/api';
import { useAuthProvider } from './users/AuthProvider';

const MovieContext = createContext();

export const useMovieProvider = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const api = useAPI();
  const auth = useAuthProvider();
  const [libraryData, setLibraryData] = useState(null);
  const [movies, setMovies] = useState(null);
  const [libraryName, setLibraryName] = useState(null);
  const [showTable, setShowTable] = useState(true);
  const [search, setSearch] = useState('');

  const moviesUpdate = (arrayMovieObjects) => {
    setMovies(arrayMovieObjects);
  };

  const allUserAddedMovies = async () => {
    try {
      const movie = await api.get('/movie');
      console.log(movie);
      setMovies(movie.data);
      setLibraryName('All User Movies');
    } catch (error) {
      if (error.response && error.response.status === 403) {
        auth.setToken('');
        auth.setIsAuthenticated('');
        window.location.reload();
        alert('session expired');
      }
    }
  };

  const buildSearchTitle = () => {
    let searchTitle = '';
    Object.values(search).map((param) => (searchTitle = `${searchTitle} ${param}`));
    return searchTitle;
  };

  const searchTMDB = async () => {
    const searchJSON = JSON.stringify(search);
    console.log(`search=${searchJSON}`);
    setLibraryName(buildSearchTitle());
    const movie = await api.post('/movie/tmdb', search);
    // const movie = await axios.post(`${process.env.REACT_APP_API_URL}/movie/search`, searchJSON, {
    //   headers: { 'Content-Type': 'application/json' },
    // });
    console.log(movie.data);
    setShowTable(true);
    // drawerClose();
    // moviesUpdate(movie.data);
    setMovies(movie.data);
  };

  const getLibraryById = async (id) => {
    console.log(`library id is: ${id}`);
    const lib = await api.get(`/library/id/${id}`);
    setLibraryData(lib.data);
    console.log(lib.data.movies);
  };

  const value = {
    movies,
    libraryData,
    libraryName,
    showTable,
    moviesUpdate,
    allUserAddedMovies,
    setShowTable,
    getLibraryById,
    setLibraryData,
    setSearch,
    searchTMDB,
  };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
