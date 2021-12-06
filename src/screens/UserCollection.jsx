import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useStyles } from '../styles/useStyles';
// import { LoginButton } from '../components/Login';
import { Libraries } from '../components/Libraries';
import { AddLibrary } from '../components/AddLibrary';
import { useMovieProvider } from '../store/MovieProvider';
import { useAuthProvider } from '../store/users/AuthProvider';

export const UserCollection = () => {
  const classes = useStyles();
  const { userLibraries } = useMovieProvider();
  const auth = useAuthProvider();
  const history = useHistory();
  //   console.log(allLibraries);

  useEffect(() => {
    if (auth.isAuthenticated === 'false') {
      history.push('/');
    }
  }, []);

  // useEffect(() => {

  // }, [userLibraries]);

  return (
    <>
      <AddLibrary />
      <div className={classes.main}>
        {userLibraries && <Libraries libraries={JSON.parse(userLibraries)} currentList={`${auth.user} Libraries`} />}
      </div>
    </>
  );
};
