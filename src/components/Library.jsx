/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import { Container, Modal, MenuItem, Select, Grid, Typography, Button, Switch } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SearchIcon from '@mui/icons-material/Search';
import { LibraryMenu } from './LibraryMenu';
import { MovieSummary } from './MovieSummary';
import { MovieModal } from './MovieModal';
import { useStyles } from '../styles/useStyles';
import { idToGenre } from '../helpers/genres';
import { convertIdToLanguage } from '../helpers/languages';
import tmdbLogo from '../icons/tmdb.svg';
import { useMovieProvider } from '../store/MovieProvider';

const libs = [
  { id: '995', name: 'Horror' },
  { id: '234', name: 'Action' },
  { id: '237', name: 'Drama' },
];

export const Library = ({ movies, currentList }) => {
  const classes = useStyles();
  const { showTable, setShowTable } = useMovieProvider();
  // const [open, setOpen] = useState(false);
  const [movie, setMovie] = useState(null);
  const tableHeight = '82vh';

  const handleRowClick = (rowData) => {
    console.log(rowData);
    setMovie(rowData);
    // setOpen(true);
    setShowTable(false);
  };

  const showSummary = () => {
    // setOpen(false);
    setShowTable(true);
  };

  return (
    <>
      {!showTable ? (
        <MovieSummary movie={movie} showSummary={showSummary} />
      ) : (
        <>
          <Container className={classes.libraryContainer}>
            <Grid container alignItems="center" direction="column">
              <Grid item xs={12}>
                <Typography variant="caption">{currentList}</Typography>
              </Grid>
            </Grid>

            <MaterialTable
              onRowClick={(event, rowData) => {
                handleRowClick(rowData);
              }}
              options={{
                filtering: false,
                showTitle: false,
                paging: false,
                sorting: true,
                maxBodyHeight: tableHeight,
                actionsColumnIndex: -1,
                search: false,
                searchFieldAlignment: 'left',
                searchAutoFocus: true,
                searchFieldVariant: 'outlined',
                toolbar: false,
              }}
              columns={[
                { title: 'DATE', field: 'release_date', type: 'date', align: 'left' },
                { title: 'TITLE', field: 'title', type: 'string', align: 'left' },
                { title: 'SCORE', field: 'vote_average', type: 'numeric', align: 'center' },
              ]}
              data={movies}
            />
          </Container>
        </>
      )}
    </>
  );
};
