import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, CssBaseline } from '@material-ui/core';
import { Profile } from '../components/Profile';
import { useStyles } from '../styles/useStyles';
import { LoginButton } from '../components/Login';
import { Library } from '../components/Library';
import { Discover } from '../components/Discover';

export const Home = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const [movies, setMovies] = useState([]);
  const [discover, setDiscover] = useState(false);
  const title = 'User Added Movies';

  const getAllUserMovies = async () => {
    const movie = await axios.get(`${process.env.REACT_APP_API_URL}/movie`);
    console.log(movie.data);
    setMovies(movie.data);
  };

  const toggleDiscover = () => setDiscover((value) => !value);

  useEffect(() => {
    getAllUserMovies();
  }, []);
  return (
    <div className={classes.main}>
      {discover && <Discover setMovies={setMovies} toggleDiscover={toggleDiscover} />}
      {!discover && <Library movies={movies} title={title} toggleDiscover={toggleDiscover} />}
    </div>
  );
};
