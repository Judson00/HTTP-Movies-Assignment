import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

const initialMovie = {
  id: 0,
    title: "",
    director: "",
    metascore: 0,
    stars: []
}

const UpdateMovie = props => {
  const [updatedMovie, setUpdatedMovie] = useState(initialMovie)
  const {id} = useParams();

  console.log("This is props from Update Movie line 13: ", props)
  const { match, movies } = props;

  console.log("Movies from UpdateMovie line 15", movies)

  useEffect(() => {
    console.log("Movies from Update Movie useEffect line 23", movies)

    const movieToUpdate = movies.find(movie => {
      console.log(`${movie.id}`, id);
      return `${movie.id}` === id;
    });
    console.log(movieToUpdate);
    setUpdatedMovie(movieToUpdate);
  }, [movies, id]);

  const handleSubmit = e => {
    e.preventDefault();
    axios 
      .put(`http://localhost:5000/api/movies/${updatedMovie.id}`, updatedMovie)
      .then(res => props.history.push(`/movies/${updatedMovie.id}`))
      .catch(err => console.log(err))
  };

  const changeHandler = e => {
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
  };

  console.log("updatedMovie: " + updatedMovie);

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
        type="text"
        name="title"
        value={updatedMovie.title}
        onChange={changeHandler}
      />
      </label>
      <label htmlFor="director">
        Director
        <input
        type="text"
        name="director"
        value={updatedMovie.director}
        onChange={changeHandler}
      />
      </label>
      <label htmlFor="metascore">
        MetaScore
        <input
        type="text"
        name="metascore"
        value={updatedMovie.metascore}
        onChange={changeHandler}
      />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default UpdateMovie;