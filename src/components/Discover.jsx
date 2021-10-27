/* eslint-disable no-return-assign */
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
  FormGroup,
  Select,
  IconButton,
  List,
  ListItem,
  ListItemText,
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
import { useMovieProvider } from '../store/MovieProvider';

const ratingParams = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];

export const Discover = ({ drawerClose, closeSearch }) => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const { movies, moviesUpdate, allUserAddedMovies, setCurrentList, setShowTable } = useMovieProvider();
  // const [movies, setMovies] = useState(null);
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const [search, setSearch] = useState(null);
  const [actor, setActor] = useState('');
  const [minScore, setMinScore] = useState('');
  const [maxScore, setMaxScore] = useState('');
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [title, setTitle] = useState('');

  const buildSearchTitle = () => {
    let searchTitle = '';
    Object.values(search).map((param) => (searchTitle = `${searchTitle} ${param}`));
    return searchTitle;
  };

  const searchTMDB = async () => {
    const searchJSON = JSON.stringify(search);
    setCurrentList(buildSearchTitle());
    const movie = await axios.post(`${process.env.REACT_APP_API_URL}/movie/search`, searchJSON, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(movie.data);
    setShowTable(true);
    drawerClose();
    moviesUpdate(movie.data);
  };

  // update search parameters as they are changed by user
  useEffect(() => {
    const searchObject = {};
    if (genre) {
      searchObject['genre'] = genre;
    }
    if (language) {
      searchObject['language'] = language;
    }
    if (actor) {
      searchObject['actor'] = actor;
    }
    if (minScore) {
      searchObject['rating_min'] = minScore;
    }
    if (maxScore) {
      searchObject['rating_max'] = maxScore;
    }
    if (title) {
      searchObject['title'] = title;
    }
    console.log(searchObject);
    setSearch(searchObject);
    // console.log(yearMap());
  }, [genre, language, actor, minScore, maxScore, title]);
  return (
    <Container alignItems="center">
      <List className="drawer-items">
        <ListItem>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Title (Optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </ListItem>

        <ListItem>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Actor (Optional)"
            value={actor}
            onChange={(e) => setActor(e.target.value)}
          />
        </ListItem>

        <ListItem>
          <FormGroup>
            <InputLabel shrink>Genre (Optional)</InputLabel>
            <Select variant="outlined" value={genre} label="Genre" onChange={(event) => setGenre(event.target.value)}>
              {Object.keys(genreId).map((g) => (
                <MenuItem value={g}>{g}</MenuItem>
              ))}
            </Select>

            <InputLabel shrink>Language (Optional)</InputLabel>
            <Select
              variant="outlined"
              value={language}
              label="Language"
              onChange={(event) => setLanguage(event.target.value)}
            >
              {Object.keys(languageId).map((g) => (
                <MenuItem value={convertLanguageToId(g)}>{g}</MenuItem>
              ))}
            </Select>
            <InputLabel shrink>Min Score (Optional)</InputLabel>
            <Select
              variant="outlined"
              value={minScore}
              label="Min Score"
              onChange={(event) => setMinScore(event.target.value)}
            >
              {ratingParams.map((g) => (
                <MenuItem value={g}>{g}</MenuItem>
              ))}
            </Select>
            <InputLabel shrink>Max Score (Optional)</InputLabel>

            <Select
              variant="outlined"
              value={maxScore}
              label="Max Score"
              onChange={(event) => setMaxScore(event.target.value)}
            >
              {ratingParams.map((g) => (
                <MenuItem value={g}>{g}</MenuItem>
              ))}
            </Select>
            <InputLabel shrink>Min Year (Optional)</InputLabel>
            <Select
              variant="outlined"
              value={minYear}
              label="Min Year"
              onChange={(event) => setMinYear(event.target.value)}
            >
              {ratingParams.map((g) => (
                <MenuItem value={g}>{g}</MenuItem>
              ))}
            </Select>
            <InputLabel shrink>Max Year (Optional)</InputLabel>

            <Select
              variant="outlined"
              value={maxYear}
              label="Max Year"
              onChange={(event) => setMaxYear(event.target.value)}
            >
              {ratingParams.map((g) => (
                <MenuItem value={g}>{g}</MenuItem>
              ))}
            </Select>
          </FormGroup>
        </ListItem>

        <ListItem>
          <Grid container alignItems="center" direction="column">
            <Grid item xs={12}>
              <Button onClick={searchTMDB} variant="outlined" className={classes.searchButton}>
                Search
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      </List>
      <Grid container alignItems="center" direction="column" justify="center">
        <Grid item xs={12}>
          <IconButton onClick={closeSearch} style={{ color: '#01BBC9', transform: 'scale(2)' }}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
