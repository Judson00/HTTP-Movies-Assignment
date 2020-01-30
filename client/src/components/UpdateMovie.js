import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateMovie = props => {
  const [updatedMovie, setUpdatedMovie] = useState({
    id: 0,
    title: "",
    director: "",
    metascore: 0,
    stars: []
  })

  const { match, movies } = props;

  useEffect(() => {
    const movieID = match.params.id;
    const movieToUpdate = movies.find(movie => {
      console.log(`${movie.id}`, movieID);
      return `${movie.id}` === movieID;
    });
    console.log(movieToUpdate);
    setUpdatedMovie(movieToUpdate);
  }, [match, movies]);

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