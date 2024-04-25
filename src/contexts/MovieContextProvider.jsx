import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://crudcrud.com/api/046f91d286c8425c94758290f8abbfae/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
