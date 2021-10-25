import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { Auth0Provider } from '@auth0/auth0-react';
import { CssBaseline } from '@material-ui/core';

import { Home } from './screens/Home';
import { Users } from './screens/Users';
import { Navbar } from './components/Navbar';
import { theme } from './styles/theme';
import { Account } from './screens/Account';

export const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Auth0Provider
          domain="dev-xqoxeihe.us.auth0.com"
          clientId="R9Sbf7MS45WwuZoy8QZqv5x4FYZtl01D"
          redirectUri={process.env.REACT_APP_REDIRECT}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/account" component={Account} />
            </Switch>
          </ThemeProvider>
        </Auth0Provider>
      </>
    </BrowserRouter>
  );
};
