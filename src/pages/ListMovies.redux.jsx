import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllMovies } from "../store/thunksActions/movies.actions";

const ListMovies = () => {
  const { movies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  console.log(movies);

  useEffect(() => {
    dispatch(setAllMovies());
  }, []);

  return (
    <div>
      <h1>List of movies</h1>
      <Link to="/create_movie">Create a movie</Link>
      <ul>
        {loading && <p>chargement...</p>}
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} - {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
