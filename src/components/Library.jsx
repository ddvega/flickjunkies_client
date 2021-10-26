/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import { Container, Modal, MenuItem, Select, Grid, Typography, Button, Switch } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import { LibraryMenu } from './LibraryMenu';
import { MovieSummary } from './MovieSummary';
import { MovieModal } from './MovieModal';
import { useStyles } from '../styles/useStyles';
import { idToGenre } from '../helpers/genres';
import { convertIdToLanguage } from '../helpers/languages';
import tmdbLogo from '../icons/tmdb.svg';

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

export const Library = ({ movies, title, toggleDiscover }) => {
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
        <>
          <Container>
            <Grid container alignItems="center" direction="row" justify="center" width="10vh">
              <Grid item xs={0}>
                <Typography variant="body2"> Find</Typography>
              </Grid>
              <Grid item xs={0}>
                <Button onClick={toggleDiscover}>
                  <img src={tmdbLogo} alt="" />
                </Button>
              </Grid>
              <Grid item xs={0}>
                <Typography variant="body2"> Movies</Typography>
              </Grid>
            </Grid>

            <MaterialTable
              onRowClick={(event, rowData) => {
                handleClick(rowData);
              }}
              actions={[
                {
                  icon: () => (
                    <>
                      <Typography variant="caption"> Search</Typography>
                      <Button onClick={toggleDiscover}>
                        <img src={tmdbLogo} alt="" />
                      </Button>
                    </>
                  ),
                  tooltip: 'Search TMDB',
                  isFreeAction: true,
                },
              ]}
              components={{
                Toolbar: (props) => (
                  <div style={{ backgroundColor: '#e8eaf5' }}>
                    <MTableToolbar {...props} />
                  </div>
                ),
              }}
              options={{
                filtering: false,
                paging: false,
                sorting: true,
                maxBodyHeight: '85vh',
                actionsColumnIndex: -1,
                search: false,
                searchFieldAlignment: 'left',
                searchAutoFocus: true,
                searchFieldVariant: 'outlined',
                toolbar: false,
              }}
              columns={[
                // { title: 'LANGUAGE', render: (rowData) => convertIdToLanguage(rowData.original_language) },
                // {
                //   title: 'GENRE',
                //   render: (rowData) => idToGenre(rowData.genre_ids[0]),
                // },
                { title: 'DATE', field: 'release_date' },
                { title: 'TITLE', field: 'title' },
                { title: 'RATING', field: 'vote_average', type: 'numeric' },
              ]}
              data={movies}
            />
          </Container>
        </>
      )}
    </>
  );
};
