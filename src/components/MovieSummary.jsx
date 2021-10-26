/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Typography, Container, Grid, IconButton } from '@material-ui/core';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import UndoIcon from '@mui/icons-material/Undo';
import { useStyles } from '../styles/useStyles';
import { LibraryMenu } from './LibraryMenu';
import { idToGenre } from '../helpers/genres';
import { convertIdToLanguage } from '../helpers/languages';
import styles from '../styles/style.module.css';

const libs = [
  { id: '995', name: 'Horror' },
  { id: '234', name: 'Action' },
  { id: '237', name: 'Drama' },
];

const printGenres = (genreArray) => {
  let genreString = '';
  // eslint-disable-next-line no-return-assign
  genreArray.map((genre) => (genreString += `${idToGenre(genre)}, `));
  return genreString.replace(/..$/, '.');
};

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
          <Typography variant="h2" className={classes.rating}>
            {movie.vote_average}
          </Typography>

          <Typography variant="h6" className={classes.rating}>
            {movie.release_date}
          </Typography>
          <Typography variant="h6" className={classes.rating}>
            {convertIdToLanguage(movie.original_language)}
          </Typography>

          <LibraryMenu libraries={libs} />
        </Grid>
      </Grid>
      <Typography className={styles.summary_title}>GENRES</Typography>

      <Typography>{printGenres(movie.genre_ids)}</Typography>

      <Typography className={styles.summary_title}>OVERVIEW</Typography>

      <Typography variant="body1">{movie.overview}</Typography>
      <Grid container alignItems="center" direction="column" justify="center" className={classes.stickToBottom}>
        <Grid item xs={12}>
          <IconButton onClick={showSummary} style={{ color: '#01BBC9', transform: 'scale(2)' }}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
