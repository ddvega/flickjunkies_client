/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Save from '@mui/icons-material/Save';

// props = libraries
export const LibraryMenu = ({ libraries }) => {
  const handleClick = (value, popupState) => {
    console.log(value);
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
                  handleClick(library.id, popupState);
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
