import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/046f91d286c8425c94758290f8abbfae/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const deleteMovieByID = (id) => {
    fetch(
      "https://crudcrud.com/api/046f91d286c8425c94758290f8abbfae/movies/" + id,
      {
        method: "DELETE",
      }
    ).then(() => {
      setMovies(
        movies.filter((movie) => {
          if (movie._id !== id) return true;
          return false;
        })
      );
    });
  };

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
