import React, { useEffect } from 'react';
import { useStyles } from '../styles/useStyles';
// import { LoginButton } from '../components/Login';
import { Libraries } from '../components/Libraries';
import { useMovieProvider } from '../store/MovieProvider';

export const Home = () => {
  const classes = useStyles();
  const { allLibraries, getAllLibraries } = useMovieProvider();
  console.log(allLibraries);

  useEffect(() => {
    if (!allLibraries) {
      getAllLibraries();
    }
  }, []);

  return (
    <>
      <div className={classes.main}>
        {allLibraries && <Libraries libraries={allLibraries} currentList="User Libraries" />}
      </div>
    </>
  );
};
