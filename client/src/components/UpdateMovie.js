import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateMovie = props => {
  const [updateMovie, setUpdateMovie] = useState({
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
    setUpdateMovie(movieToUpdate);
  }, [match, movies]);

  const handleSubmit = e => {
    e.preventDefault();
    axios 
      .put(`http://localhost:5000/api/movies/${updateMovie.id}`, UpdateMovie)
      .then(res => props.history.push(`/movies/${UpdateMovie.id}`))
      .catch(err => console.log(err))
  };

  const changeHandler = e => {
    setUpdateMovie({ ...updateMovie, [e.target.name]: e.target.value });
  };

  return(
    <form onSubmit={handleSubmit}>
      <label for="title">
        Title
        <input
        type="text"
        name="title"
        value={updateMovie.title}
        onChange={changeHandler}
      />
      </label>
      <label for="director">
        Director
        <input
        type="text"
        name="director"
        value={updateMovie.director}
        onChange={changeHandler}
      />
      </label>
      <label for="metascore">
        MetaScore
        <input
        type="text"
        name="metascore"
        value={updateMovie.metascore}
        onChange={changeHandler}
      />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default UpdateMovie;