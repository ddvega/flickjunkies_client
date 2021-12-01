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
import { LoginButton } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { Library } from './screens/Library';

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
              <Route path="/account" component={Account} />
              <Route path="/library/:id" component={Library} />
            </Switch>
          </MovieProvider>
        </ThemeProvider>
      </>
    </BrowserRouter>
  );
};
