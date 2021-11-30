import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Users = () => {
  // const [name, setName] = useState('');
  // const [movies, setMovies] = useState([]);

  // const getAll = async (uname) => {
  //   console.log(`env variable REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`);
  //   const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/?username=${uname}`);
  //   setName(result.data[0].username);
  // };

  // useEffect(() => {
  //   getAll('davidsan');
  // }, []);

  // const getAll = async () => {
  //   console.log(`env variable REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`);
  //   const result = await axios.get(`${process.env.REACT_APP_API_URL}`);
  //   console.log(typeof result.data);

  //   const movie = await axios.get(`${process.env.REACT_APP_API_URL}/movie`);
  //   console.log(movie.data);
  //   setMovies(movie.data);
  //   setName(result.data);
  // };

  // useEffect(() => {
  //   getAll();
  // }, []);

  return (
    <div>
      <h1>hello there friend</h1>
    </div>
  );
};
