/* eslint-disable react/prop-types */
// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import AuthService from './Services/AuthService';
import { useUserProvider } from '../store/users/UserProvider';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  // const isLoggedIn = AuthService.isLoggedIn();
  const { isAuthenticated } = useUserProvider();

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      ))}
    />
  );
};

// export default PrivateRoute;
