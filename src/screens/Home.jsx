import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, CssBaseline } from '@material-ui/core';
import { Profile } from '../components/Profile';
import { useStyles } from '../styles/useStyles';
import { LoginButton } from '../components/Login';
import { Library } from '../components/Library';
import { Discover } from '../components/Discover';
import { useMovieProvider } from '../store/MovieProvider';

export const Home = () => {
  const classes = useStyles();
  const { movies, moviesUpdate, allUserAddedMovies, currentList, setCurrentList } = useMovieProvider();
  // const { isAuthenticated } = useAuth0();
  // const [movies, setMovies] = useState([]);
  const [discover, setDiscover] = useState(false);
  const title = 'User Added Movies';

  // const getAllUserMovies = async () => {
  //   const movie = await axios.get(`${process.env.REACT_APP_API_URL}/movie`);
  //   console.log(movie.data);
  //   // setMovies(movie.data);
  //   moviesUpdate(movie.data);
  // };

  // const toggleDiscover = () => setDiscover((value) => !value);
  const openDiscover = () => setDiscover(true);
  const closeDiscover = () => setDiscover(false);

  // when page is refreshed, add all movies added by users
  useEffect(() => {
    allUserAddedMovies();
    setCurrentList('All User Added Movies');
  }, []);
  return (
    <div className={classes.main}>
      {/* {discover && <Discover />} */}
      {movies && <Library movies={movies} currentList={currentList} />}
    </div>
  );
};
