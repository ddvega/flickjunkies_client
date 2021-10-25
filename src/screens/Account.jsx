import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, CssBaseline } from '@material-ui/core';
import { LoginButton } from '../components/Login';
import { LogoutButton } from '../components/Logout';
import { useStyles } from '../styles/useStyles';

export const Account = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
      </Container>
    </>
  );
};
