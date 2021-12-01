import React, { useState, useEffect } from 'react';
import { useStyles } from '../styles/useStyles';
// import { LoginButton } from '../components/Login';
import { Libraries } from '../components/Libraries';
import { useAuthProvider } from '../store/users/AuthProvider';
import { useAPI } from '../api/api';

export const Home = () => {
  const classes = useStyles();
  const api = useAPI();
  // const { movies, moviesUpdate, allUserAddedMovies, currentList, setCurrentList } = useMovieProvider();
  const [libraries, setLibraries] = useState(null);
  const auth = useAuthProvider();

  // when page is refreshed, add all movies added by users
  useEffect(async () => {
    const libs = await api.get('/library/all');
    console.log(libs.data);
    setLibraries(libs.data);
  }, []);

  return (
    <>
      <div className={classes.main}>
        {libraries && <Libraries libraries={libraries} currentList="User Libraries" />}
      </div>
    </>
  );
};
