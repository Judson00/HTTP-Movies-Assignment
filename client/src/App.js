import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import UpdateMovie from './components/UpdateMovie';

const App = props => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setUpdatedMovie] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const getMovies = payload => {
    setUpdatedMovie(payload);
  }

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
      <Route path="/update-movie/:id" render={props => <UpdateMovie{...props} movies={movies} />} 
      />
    </>
  );
};

export default App;
