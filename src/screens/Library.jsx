import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, CssBaseline } from '@material-ui/core';
import { Profile } from '../components/Profile';
import { useStyles } from '../styles/useStyles';
// import { LoginButton } from '../components/Login';
import { Movies } from '../components/Movies';
import { Discover } from '../components/Discover';
import { LoginButton } from '../components/Login';
import { Libraries } from '../components/Libraries';
import { useMovieProvider } from '../store/MovieProvider';
import { useAuthProvider } from '../store/users/AuthProvider';
import { useAPI } from '../api/api';

export const Library = () => {
  const classes = useStyles();
  const { id } = useParams();
  // const api = useAPI();
  const { libraryData, getLibraryById, movies, libraryName } = useMovieProvider();

  useEffect(() => {
    if (id !== 'tmdb') {
      getLibraryById(id);
    }
  }, []);

  return (
    <>
      <div className={classes.main}>
        {id === 'tmdb'
          ? movies && <Movies movies={movies} libraryName={libraryName} />
          : libraryData && <Movies movies={libraryData.movies} libraryName={libraryData.name} />}
      </div>
    </>
  );
};
