import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { Container, CssBaseline } from '@material-ui/core';
import { LogoutButton } from '../components/Logout';
import { LoginButton } from '../components/Login';
import { useStyles } from '../styles/useStyles';
import { useAuthProvider } from '../store/users/AuthProvider';

export const Account = () => {
  const classes = useStyles();
  // const { isAuthenticated } = useAuth0();
  const auth = useAuthProvider();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>{auth.isAuthenticated === 'true' ? <LogoutButton /> : <LoginButton />}</div>
      </Container>
    </>
  );
};
