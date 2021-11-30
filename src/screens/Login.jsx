import React, { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { Button, TextField, List, ListItem } from '@material-ui/core';
import axios from 'axios';
import { Redirect } from 'react-router';
// import { useUserProvider } from '../store/users/UserProvider';
import { useAuthProvider } from '../store/users/AuthProvider';

export const Login = () => {
  // const { loginWithRedirect } = useAuth0();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [newJwt, setNewJwt] = useState(null);
  // const { token } = useUserProvider();
  const auth = useAuthProvider();

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
  const handleLogin = () => {
    auth.login(username, password);
  };

  useEffect(() => {
    console.log(`jwt from home: ${auth.token}`);
  }, [auth.token]);

  return (
    <>
      <List className="drawer-items">
        <ListItem>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </ListItem>

        <ListItem>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ListItem>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Log In / Sign Up
        </Button>
      </List>
    </>
  );
};
