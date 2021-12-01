import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { useAuthProvider } from '../store/users/AuthProvider';

export const LogoutButton = () => {
  // const { logout } = useAuth0();
  const history = useHistory();
  const auth = useAuthProvider();

  const handleLogout = () => {
    auth.logout();
    history.push('/');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogout}>
      Log Out
    </Button>
  );
};
