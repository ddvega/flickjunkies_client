/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Typography, Container, Grid, IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useStyles } from '../styles/useStyles';
import { LibraryMenu } from './LibraryMenu';

const libs = [
  { id: '995', name: 'Horror' },
  { id: '234', name: 'Action' },
  { id: '237', name: 'Drama' },
];

export const MovieSummary = ({ movie, showSummary }) => {
  const classes = useStyles();

  return (
    <div className={classes.summary}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Container maxWidth="xs">
            <img
              width="100%"
              height="100%"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              border="1"
            />
          </Container>
        </Grid>
        <Grid item xs={4}>
          <br />
          <Typography variant="h2" className={classes.rating}>
            {movie.vote_average}
          </Typography>
          <br />
          <Typography variant="h6" className={classes.rating}>
            {movie.release_date}
          </Typography>
          <Typography variant="h6" className={classes.rating}>
            {movie.original_language}
          </Typography>
          <br />
          <br />
          <br />
          <LibraryMenu libraries={libs} />
        </Grid>
      </Grid>

      <Typography variant="body1">{movie.overview}</Typography>
      <Grid container alignItems="center" direction="column" justify="center" className={classes.stickToBottom}>
        <Grid item xs={12}>
          <IconButton onClick={showSummary} style={{ color: '#01BBC9', transform: 'scale(3)' }}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
