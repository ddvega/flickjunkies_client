import React from 'react';
import { useStyles } from '../styles/useStyles';
// import { LoginButton } from '../components/Login';
import { Libraries } from '../components/Libraries';
import { useMovieProvider } from '../store/MovieProvider';

export const Home = () => {
  const classes = useStyles();
  const { allLibraries } = useMovieProvider();

  return (
    <>
      <div className={classes.main}>
        {allLibraries && <Libraries libraries={JSON.parse(allLibraries)} currentList="User Libraries" />}
      </div>
    </>
  );
};
