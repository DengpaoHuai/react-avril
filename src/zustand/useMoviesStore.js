import { create } from "zustand";

const useMovieStore = create((set) => ({
  movies: [],
  setAllMovies: () =>
    fetch("https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies")
      .then((response) => response.json())
      .then((data) =>
        set(() => ({
          movies: data,
        }))
      ),
}));

export default useMovieStore;
