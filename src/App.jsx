import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './Router';
import { AuthProvider } from './store/users/AuthProvider';
import { store, persistor } from './store/store';

export const App = () => (
  <AuthProvider>
    <Router />
  </AuthProvider>
);
