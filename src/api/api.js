/* eslint-disable import/named */
import axios from 'axios';
import { useAuthProvider } from '../store/users/AuthProvider';

const instance = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });

export const useAPI = () => {
  const auth = useAuthProvider();

  if (auth.token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
    instance.defaults.headers.common['Content-Type'] = 'application/json';
    instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    instance.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
  }

  return instance;
};

export const apiRequest = async (route) => {
  const api = useAPI();
  const obj = await api.get(route);
  return obj;
};

// const getLibraryById = async (id) => {
//   console.log(`library id is: ${id}`);
//   const lib = await api.get(`/library/id/${id}`);
//   setLibraryData(lib.data);
//   console.log(lib.data.movies);
// };
