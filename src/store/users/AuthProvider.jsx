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
  const [token, setToken] = useState(() => getLocalStorage('token', ''));
  const [isAuthenticated, setIsAuthenticated] = useState(() => getLocalStorage('isAuthenticated', 'false'));
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(() => getLocalStorage('username', ''));

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setLocalStorage('token', token);
    setLocalStorage('isAuthenticated', isAuthenticated);
    setLocalStorage('username', user);
  }, [token, isAuthenticated, user]);

  const login = async (username, password) => {
    const userObject = { username, password };
    const getJwt = await axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, userObject, {
      headers: { 'Content-Type': 'application/json' },
    });
    setToken(getJwt.data.jwtToken);
    setIsAuthenticated('true');
    console.log(`User type is: ${typeof (username)}`);
    setUser(username);
  };

  const logout = () => {
    setToken('');
    setIsAuthenticated('false');
    setUser('');
  };

  const value = { token, isAuthenticated, login, logout, setToken, setIsAuthenticated, user };

  return <UserContext.Provider value={value}>{!loading && children}</UserContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
