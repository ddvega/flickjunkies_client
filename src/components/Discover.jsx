/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  TextField,
} from '@material-ui/core';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import DatePicker from '@mui/lab/DatePicker';
import { Profile } from './Profile';
import { useStyles } from '../styles/useStyles';
import { LoginButton } from './Login';
import { Library } from './Library';
import { genreId, idGenre, genreToId } from '../helpers/genres';
import { convertLanguageToId, languageId } from '../helpers/languages';
import { MovieSummary } from './MovieSummary';
import { yearMap } from '../helpers/years';

const rating = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];

export const Discover = ({ setMovies, toggleDiscover }) => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  // const [movies, setMovies] = useState(null);
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const [search, setSearch] = useState(null);
  const [actor, setActor] = useState('');
  const [minRating, setMinRating] = useState('');

  const title = 'User Added Movies';

  const searchTMDB = async () => {
    const searchJSON = JSON.stringify(search);

    const movie = await axios.post(`${process.env.REACT_APP_API_URL}/movie/search`, searchJSON, {
      headers: { 'Content-Type': 'application/json' },
    });
    // Object.keys(genreId).map((id) => console.log(id));
    console.log(movie.data);
    setMovies(movie.data);
    toggleDiscover();
  };

  //   useEffect(() => {
  //     getAllUserMovies();
  //   }, []);

  useEffect(() => {
    const searchObject = {};
    if (genre) {
      searchObject['genre'] = genre;
    }
    if (language) {
      searchObject['language'] = language;
    }
    if (actor) {
      searchObject[actor] = actor;
    }
    console.log(searchObject);
    setSearch(searchObject);
    // console.log(yearMap());
  }, [genre, language, actor]);
  return (
    <>
      <Container className={classes.discover_box}>
        <TextField label="Actor (Optional)" value={actor} onChange={(e) => setActor(e.target.value)} />
        <FormControl fullWidth>
          <InputLabel>Genre (Optional)</InputLabel>
          <Select
            defaultValue=""
            labelId=""
            value={genre}
            label="Genre"
            onChange={(event) => setGenre(event.target.value)}
          >
            {Object.keys(genreId).map((g) => (
              <MenuItem value={g}>{g}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Language (Optional)</InputLabel>
          <Select
            defaultValue=""
            labelId=""
            value={language}
            label="Language"
            onChange={(event) => setLanguage(event.target.value)}
          >
            {Object.keys(languageId).map((g) => (
              <MenuItem value={convertLanguageToId(g)}>{g}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Minimum Rating (Optional)</InputLabel>
          <Select
            defaultValue=""
            labelId=""
            value={minRating}
            label="Minimum Rating"
            onChange={(event) => setMinRating(event.target.value)}
          >
            {}
          </Select>
        </FormControl>

        {/* {movies && <Library movies={movies} title={title} />} */}
      </Container>

      <Grid container alignItems="center" direction="column">
        <Grid item xs={12}>
          <Button onClick={searchTMDB} variant="outlined" className={classes.searchButton}>
            Search
          </Button>
        </Grid>
      </Grid>

      <Grid container alignItems="center" direction="column" justify="center" className={classes.stickToBottom}>
        <Grid item xs={12}>
          <IconButton onClick={toggleDiscover} style={{ color: '#01BBC9', transform: 'scale(2)' }}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};
