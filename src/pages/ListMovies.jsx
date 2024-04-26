import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../contexts/MovieContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { setAllMovies } from "../store/actions/movies.actions";

const ListMovies = () => {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setAllMovies(data));
      });
  }, []);

  return (
    <div>
      <h1>List of movies</h1>
      <Link to="/create_movie">Create a movie</Link>
      <ul>
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
