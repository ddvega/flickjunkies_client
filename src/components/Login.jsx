import React, { useState, useEffect } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { Button, TextField, List, ListItem } from '@material-ui/core';
// import axios from 'axios';
import { Redirect, useHistory } from 'react-router';
// import { useUserProvider } from '../store/users/UserProvider';
import { useAuthProvider } from '../store/users/AuthProvider';

export const LoginButton = () => {
  // const { loginWithRedirect } = useAuth0();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuthProvider();

  const handleLogin = () => {
    auth.login(username, password);
    history.push('/');
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
