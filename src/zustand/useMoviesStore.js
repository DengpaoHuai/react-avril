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
  addMovie: (movie) =>
    fetch("https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    }).then(() => {
      set((state) => ({
        movies: [...state.movies, movie],
      }));
    }),
}));

export default useMovieStore;
