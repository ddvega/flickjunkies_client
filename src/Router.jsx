import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
// import { Auth0Provider } from '@auth0/auth0-react';
import { CssBaseline } from '@material-ui/core';
import { MovieProvider } from './store/MovieProvider';
import { Home } from './screens/Home';
import { Users } from './screens/Users';
import { Navbar } from './components/Navbar';
import { theme } from './styles/theme';
import { Account } from './screens/Account';
// import { UserProvider } from './store/UserProvider';
import { Login } from './screens/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { UserProvider } from './store/users/UserProvider';

export const Router = () => {
  return (
    <BrowserRouter>
      <>
        <ThemeProvider theme={theme}>
          <MovieProvider>
            <CssBaseline />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/test" component={Users} />
            </Switch>
          </MovieProvider>
        </ThemeProvider>
      </>
    </BrowserRouter>
  );
};
