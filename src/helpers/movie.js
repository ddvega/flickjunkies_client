import { useAPI } from '../api/api';

const api = useAPI();

export const allUserMovies = async () => {
  //   try {
  //     const movie = await api.get('/movie/all');
  //     console.log(movie);
  //     setMovies(movie.data);
  //     setLibraryName('All User Movies');
  //   } catch (error) {
  //     if (error.response && error.response.status === 403) {
  //       auth.logout();
  //       history.push('/account');
  //     }
  //   }
  const movie = await api.get('/movie/all');
  return movie.data;
};

// export const buildSearchTitle = () => {
//   let searchTitle = '';
//   Object.values(search).map((param) => (searchTitle = `${searchTitle} ${param}`));
//   return searchTitle;
// };

// export const searchTMDB = async () => {
//   setLibraryName(buildSearchTitle());
//   const movie = await api.post('/movie/tmdb', search);
//   console.log(movie.data);
//   setShowTable(true);
//   setMovies(movie.data);
// };

// export const filterUserLibraries = (libs) => {
//   const userLib = [];
//   libs.map((library) => {
//     if (library.username === auth.user) {
//       userLib.push(library);
//     }
//   });
//   setUserLibraries(JSON.stringify(userLib));
// };

export const getAllLibraries = async () => {
  try {
    const lib = await api.get('/library/all');
    return lib.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      //   auth.logout();
      //   history.push('/');
      console.log(error);
      window.location.reload();
    }
  }
  return null;
};

export const getLibraryById = async (id) => {
  console.log(`library id is: ${id}`);
  const lib = await api.get(`/library/id/${id}`);
  return lib.data;
  // setLibraryData(lib.data);
  // setMovies(lib.data);
};
