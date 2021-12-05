import React, { Suspense, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { CircularProgress } from '@mui/material';
import { useStyles } from '../styles/useStyles';
// import { LoginButton } from '../components/Login';
import { Movies } from '../components/Movies';
import { useMovieProvider } from '../store/MovieProvider';
import { useAPI } from '../api/api';

export const Library = () => {
  const history = useHistory();
  const classes = useStyles();
  const api = useAPI();
  const { id } = useParams();
  // const [libraryData, setLibraryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movies, libraryName, allUserMovies, getLibraryById, libraryData } = useMovieProvider();

  // const getLibraryById = async () => {
  //   console.log(`library id is: ${id}`);
  //   const lib = await api.get(`/library/id/${id}`);
  //   setLibraryData(lib.data);
  // };

  useEffect(() => {
    try {
      setLoading(true);
      if (id === 'movies') {
        allUserMovies();
      } else if (id === 'all') {
        history.push('/');
      } else if (id !== 'tmdb') {
        console.log('hitting the right opint');
        getLibraryById(id);
      }
      setLoading(false);
      console.log(`id=${id}`);
      console.log(`libraryData=${JSON.stringify(libraryData)}`);
    } catch (error) {
      // setLoading(false);
      console.log(error);
    }
  }, []);

  return (
    // <>
    //   {loading ? (
    //     <CircularProgress />
    //   ) : (
    //     <div className={classes.main}>
    //       {libraryData && <Movies movies={libraryData.movies} libraryName={libraryData.name} />}
    //     </div>
    //   )}
    // </>
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={classes.main}>
          {id === 'tmdb' || id === 'movies' ? (
            movies && <Movies movies={movies} libraryName={libraryName} />
          ) : (
            libraryData && <Movies movies={libraryData.movies} libraryName={libraryData.name} />
          )}
        </div>
      )}
    </>
  );
};
