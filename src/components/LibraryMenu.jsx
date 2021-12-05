/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Save from '@mui/icons-material/Save';
import { useMovieProvider } from '../store/MovieProvider';
import { useAPI } from '../api/api';
import { useAuthProvider } from '../store/users/AuthProvider';

// props = libraries
export const LibraryMenu = ({ libraries, movie }) => {
  // const auth = useAuthProvider();
  const api = useAPI();
  const history = useHistory();
  const { setShowTable } = useMovieProvider();

  const handleClick = async (libraryId, popupState) => {
    console.log(libraryId);
    console.log(movie);
    const status = await api.post(`/library/${libraryId}`, movie);
    setShowTable(true);
    // history.push(`/library/${libraryId}`);

    popupState.close();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <IconButton {...bindTrigger(popupState)} style={{ color: '#01BBC9', transform: 'scale(2)' }}>
            <Save />
          </IconButton>

          <Menu {...bindMenu(popupState)}>
            {libraries.map((library) => (
              <MenuItem
                onClick={() => {
                  handleClick(library.libraryId, popupState);
                }}
              >
                {library.name}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
};
