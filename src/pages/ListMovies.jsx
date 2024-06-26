import { useEffect } from "react";
import { Link } from "react-router-dom";
import useMovieStore from "../zustand/useMoviesStore";

const ListMovies = () => {
  const { movies, setAllMovies } = useMovieStore();

  console.log(movies);

  useEffect(() => {
    setAllMovies();
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
