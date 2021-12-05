/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Typography, Container, Grid, IconButton, List, ListItem } from '@material-ui/core';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import UndoIcon from '@mui/icons-material/Undo';
import { useStyles } from '../styles/useStyles';
import { LibraryMenu } from './LibraryMenu';
import { idToGenre } from '../helpers/genres';
import { convertIdToLanguage } from '../helpers/languages';
import styles from '../styles/style.module.css';
import { useMovieProvider } from '../store/MovieProvider';

const printGenres = (genreArray) => {
  let genreString = '';
  // eslint-disable-next-line no-return-assign
  genreArray.map((genre) => (genreString += `${genre.name}, `));
  return genreString.replace(/..$/, '.');
};

const convertYearToDate = (date) => {
  return date.slice(0, 4);
};

export const MovieSummary = ({ movie, showSummary }) => {
  const classes = useStyles();
  const { userLibraries } = useMovieProvider();
  return (
    <>
      {movie && (
        <>
          <Grid container>
            <Grid item xs={9}>
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
            <Grid item xs={3}>
              <List>
                <ListItem>
                  <Typography variant="caption" className={styles.summary_title}>
                    Score:
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" className={classes.rating}>
                    {movie.vote_average}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="caption" className={styles.summary_title}>
                    Votes
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">{movie.vote_count}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="caption" className={styles.summary_title}>
                    Year
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">{convertYearToDate(movie.release_date)}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="caption" className={styles.summary_title}>
                    Language
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">{convertIdToLanguage(movie.language.languageName)}</Typography>
                </ListItem>
                <ListItem>
                  <LibraryMenu libraries={JSON.parse(userLibraries)} movie={movie} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Typography className={styles.summary_title}>GENRES</Typography>
          <Typography>{printGenres(movie.genres)}</Typography>
          <Typography className={styles.summary_title}>OVERVIEW</Typography>
          <Typography variant="body1">{movie.overview}</Typography>
          <Grid container alignItems="center" direction="column" justify="center" className={classes.stickToBottom}>
            <Grid item xs={12}>
              <IconButton onClick={showSummary} style={{ color: '#01BBC9', transform: 'scale(2)' }}>
                <KeyboardBackspaceIcon />
              </IconButton>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
