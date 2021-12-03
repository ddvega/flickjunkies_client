/* eslint-disable no-return-assign */
import React, { useContext, useState, createContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { useAPI, apiRequest } from '../api/api';
import { useAuthProvider } from './users/AuthProvider';
import { setLocalStorage, getLocalStorage } from '../helpers/localStorage';

const MovieContext = createContext();

export const useMovieProvider = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const api = useAPI();
  const auth = useAuthProvider();
  const history = useHistory();
  const [libraryData, setLibraryData] = useState(null);
  const [movies, setMovies] = useState(null);
  const [libraryName, setLibraryName] = useState(null);
  const [showTable, setShowTable] = useState(true);
  const [search, setSearch] = useState('');
  const [allLibraries, setAllLibraries] = useState(null);

  useEffect(() => {
    setLocalStorage('allLibraries', allLibraries);
  }, [allLibraries]);

  const moviesUpdate = (arrayMovieObjects) => {
    setMovies(arrayMovieObjects);
  };

  const allUserMovies = async () => {
    try {
      const movie = await api.get('/movie/all');
      console.log(movie);
      setMovies(movie.data);
      setLibraryName('All User Movies');
    } catch (error) {
      if (error.response && error.response.status === 403) {
        auth.logout();
        history.push('/account');
      }
    }
  };

  const buildSearchTitle = () => {
    let searchTitle = '';
    Object.values(search).map((param) => (searchTitle = `${searchTitle} ${param}`));
    return searchTitle;
  };

  const searchTMDB = async () => {
    setLibraryName(buildSearchTitle());
    const movie = await api.post('/movie/tmdb', search);
    console.log(movie.data);
    setShowTable(true);
    setMovies(movie.data);
  };

  const getLibraryById = async (id) => {
    console.log(`library id is: ${id}`);
    const lib = await api.get(`/library/id/${id}`);
    setLibraryData(lib.data);
  };

  const updateLibraries = async () => {
    // console.log(`library id is: ${id}`);
    const lib = await api.get('/library/all');
    setAllLibraries(JSON.stringify(lib.data));
    // setUserLibraries(lib.data);
    // setLibraryData(lib.data);
  };

  useEffect(() => {
    updateLibraries();
  }, []);

  const value = {
    movies,
    libraryData,
    libraryName,
    showTable,
    allLibraries,
    moviesUpdate,
    allUserMovies,
    setShowTable,
    getLibraryById,
    setLibraryData,
    setSearch,
    searchTMDB,
    updateLibraries,
  };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

MovieProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
