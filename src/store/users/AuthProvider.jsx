// not being used
import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setLocalStorage, getLocalStorage } from '../../helpers/localStorage';

const UserContext = createContext();

export const useAuthProvider = () => {
  return useContext(UserContext);
};

export function AuthProvider({ children }) {
  // const { user, isAuthenticated } = useAuth0();
  // const api = useAPI();
  const [token, setToken] = useState(() => getLocalStorage('token', ''));
  const [isAuthenticated, setIsAuthenticated] = useState(() => getLocalStorage('isAuthenticated', 'false'));
  const [username, setUsername] = useState(() => getLocalStorage('username', ''));
  const [password, setPassword] = useState(() => getLocalStorage('password', ''));
  //   const [token, setToken] = useState('');
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // const [picture, setPicture] = useState(null);
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [refresh, setRefresh] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setLocalStorage('username', username);
    setLocalStorage('password', password);
    setLocalStorage('token', token);
    setLocalStorage('isAuthenticated', isAuthenticated);
  }, [token, isAuthenticated, username, password]);

  const login = async (u, p) => {
    setUsername(u);
    setPassword(p);
    // console.log(`username: ${u} password: ${p}`);
    const userObject = { username: u, password: p };
    const getJwt = await axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, userObject, {
      headers: { 'Content-Type': 'application/json' },
    });
    setToken(getJwt.data.jwtToken);
    // const getJwt = await api.post('/authenticate', userObject);
    // setLoading(false);
    // setToken(getJwt.data.jwtToken);
    setIsAuthenticated('true');
    // return getJwt.data.jwtToken;
  };

  const refreshToken = async () => {
    const userObject = { username, password };
    const getJwt = await axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, userObject, {
      headers: { 'Content-Type': 'application/json' },
    });
    setToken(getJwt.data.jwtToken);
    // const getJwt = await api.post('/authenticate', userObject);
    // setLoading(false);
    // setToken(getJwt.data.jwtToken);
    setIsAuthenticated('true');
    // return getJwt.data.jwtToken;
  };

  const value = { token, isAuthenticated, login, refreshToken };

  return <UserContext.Provider value={value}>{!loading && children}</UserContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
