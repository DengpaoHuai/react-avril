import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContextProvider";

const ListMovies = () => {
  const { movies, deleteMovieByID } = useContext(MovieContext);

  return (
    <div>
      <h1>List of movies</h1>
      <Link to="/create_movie">Create a movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} - {movie.director}
            <button onClick={() => deleteMovieByID(movie._id)}>
              supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
