/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { Container, Modal, MenuItem, Select, Box, Typography } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import { LibraryMenu } from './LibraryMenu';
import { MovieSummary } from './MovieSummary';
import { MovieModal } from './MovieModal';
import { useStyles } from '../styles/useStyles';

const libs = [
  { id: '995', name: 'Horror' },
  { id: '234', name: 'Action' },
  { id: '237', name: 'Drama' },
];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Library = ({ movies, title }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState(null);

  const handleClick = (rowData) => {
    console.log(rowData);
    setMovie(rowData);
    setOpen(true);
  };

  const showSummary = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <MovieSummary movie={movie} showSummary={showSummary} />
      ) : (
        <Container className={classes.content}>
          <MaterialTable
            title={title}
            onRowClick={(event, rowData) => {
              handleClick(rowData);
            }}
            options={{
              filtering: false,
              paging: false,
              sorting: true,
              maxBodyHeight: '85vh',
              actionsColumnIndex: -1,
              tableLayout: 'auto',
            }}
            columns={[
              { title: 'LANGUAGE', field: 'original_language' },
              { title: 'GENRE', field: 'genre_ids[0]' },
              { title: 'TITLE', field: 'title' },
              { title: 'RATING', field: 'vote_average', type: 'numeric' },
            ]}
            data={movies}
          />
        </Container>
      )}
    </>
  );
};
