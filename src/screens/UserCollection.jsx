import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useStyles } from '../styles/useStyles';
// import { LoginButton } from '../components/Login';
// import { Libraries } from '../components/Libraries';
import { UserLibraries } from '../components/UserLibraries';
import { AddLibrary } from '../components/AddLibrary';
import { useMovieProvider } from '../store/MovieProvider';
import { useAuthProvider } from '../store/users/AuthProvider';

export const UserCollection = () => {
  const classes = useStyles();
  const { allLibraries, getAllLibraries, userLibraries } = useMovieProvider();
  const auth = useAuthProvider();
  const history = useHistory();
  //   console.log(allLibraries);

  useEffect(() => {
    if (auth.isAuthenticated === 'false') {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    if (!allLibraries) {
      getAllLibraries();
    }
  }, []);

  return (
    <>
      <AddLibrary />
      <div className={classes.main}>
        {userLibraries && <UserLibraries libraries={JSON.parse(userLibraries)} currentList={`${auth.user} Libraries`} />}
      </div>
    </>
  );
};
