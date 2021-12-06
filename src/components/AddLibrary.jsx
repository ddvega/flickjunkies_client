import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router';
import { Button, TextField } from '@material-ui/core';
import { useAuthProvider } from '../store/users/AuthProvider';
import { useAPI } from '../api/api';
import { useMovieProvider } from '../store/MovieProvider';

export const AddLibrary = () => {
  // const { logout } = useAuth0();
  const history = useHistory();
  // const auth = useAuthProvider();
  const { getAllLibraries } = useMovieProvider();
  const api = useAPI();
  const [libraryName, setLibraryName] = useState('');

  const handleClick = async () => {
    if (libraryName) {
      const lib = { name: libraryName };
      const status = await api.post('/library', lib);
      setLibraryName('');
      getAllLibraries();
    }
  };

  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Library Name"
        value={libraryName}
        onChange={(e) => setLibraryName(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add Library
      </Button>
    </>
  );
};
