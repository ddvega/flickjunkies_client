// not being used
import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAuthProvider } from './AuthProvider';
// import { setLocalStorage, getLocalStorage } from '../../helpers/localStorage';

const UserContext = createContext();

export const useUserProvider = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  // const { user, isAuthenticated } = useAuth0();
  // const api = useAPI();
  // const [token, setToken] = useState(() => getLocalStorage('token', ''));
  // const [isAuthenticated, setIsAuthenticated] = useState(() => getLocalStorage('isAuthenticated', 'false'));
  const auth = useAuthProvider();
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(null);

  // const [picture, setPicture] = useState(null);
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    setToken(auth.token);
    setIsAuthenticated(true);
  }, [auth.token]);

  // const login = async (username, password) => {
  //   console.log(`username: ${username} password: ${password}`);
  //   const userObject = { username, password };
  //   const getJwt = await axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, userObject, {
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  //   // const getJwt = await api.post('/authenticate', userObject);
  //   // setLoading(false);
  //   setToken(getJwt.data.jwtToken);
  //   setIsAuthenticated('true');
  //   // return getJwt.data.jwtToken;
  // };

  const value = { isAuthenticated, token };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
