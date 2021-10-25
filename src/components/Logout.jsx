import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="contained" color="primary" onClick={() => logout({ returnTo: process.env.REACT_APP_REDIRECT })}>
      Log Out
    </Button>
  );
};
