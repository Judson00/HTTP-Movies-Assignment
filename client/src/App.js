import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import UpdateMovie from './components/UpdateMovie';
import axios from 'axios';

const App = props => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([])

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => {
        console.log("res.data from app", res.data)
        setMovies(res.data)
      })
      .catch(err => console.log(err.response));
  }, [movies]) 

  console.log("Movies from App.js line 28", movies) 

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="/update-movie/:id" render={props => <UpdateMovie{...props} movies={movies} setMovies={setMovies}/>} 
      />
    </>
  );
};

export default App;
