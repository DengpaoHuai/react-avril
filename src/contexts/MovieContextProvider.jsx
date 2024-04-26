import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const deleteMovieByID = (id) => {
    fetch(
      "https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies/" + id,
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

  const createMovie = async (movie) => {
    const response = await fetch(
      "https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );
    const results = await response.json();
    setMovies([...movies, results]);
  };

  return (
    <MovieContext.Provider value={{ movies, deleteMovieByID, createMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
