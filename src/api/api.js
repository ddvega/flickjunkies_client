/* eslint-disable import/named */
import axios from 'axios';
import { useAuthProvider } from '../store/users/AuthProvider';
// import { getLocalStorage } from '../helpers/localStorage';

const instance = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });

export const useAPI = () => {
  const auth = useAuthProvider();
  // const token = getLocalStorage('token', '');

  console.log(`token in useAPI: ${auth.token}`);
  console.log(`isAuthenticated: ${auth.isAuthenticated}`);
  if (auth.token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
    // instance.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
  }

  return instance;
};
