/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
import React, { useContext, useState, createContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useAPI } from '../api/api';
import { useAuthProvider } from './users/AuthProvider';

const LibraryContext = createContext();

export const useLibraryProvider = () => {
  return useContext(LibraryContext);
};

export const LibraryProvider = ({ children }) => {
  const api = useAPI();
  const auth = useAuthProvider();
  const [libraryData, setLibraryData] = useState(null);
  const [allLibraries, setAllLibraries] = useState(null);
  const [userLibraries, setUserLibraries] = useState([]);

  const filterUserLibraries = (libs) => {
    const userLib = [];
    libs.map((library) => {
      if (library.username === auth.user) {
        userLib.push(library);
      }
    });
    setUserLibraries(JSON.stringify(userLib));
  };

  const getAllLibraries = async () => {
    const lib = await api.get('/library/all');
    setAllLibraries(lib.data);
    if (lib.data) {
      filterUserLibraries(lib.data);
    }
  };

  const getLibraryById = async (id) => {
    console.log(`library id is: ${id}`);
    const lib = await api.get(`/library/id/${id}`);
    setLibraryData(lib.data);
  };

  const value = {
    allLibraries,
    userLibraries,
    libraryData,
    getAllLibraries,
    getLibraryById,
    setUserLibraries,
    setAllLibraries,
  };
  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
};

LibraryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
