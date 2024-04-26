import { createSlice } from "@reduxjs/toolkit";
import { setAllMovies } from "../thunksActions/movies.actions";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: initialState,
  reducers: {
    /* setAllMovies: (state, action) => {
      state.movies = action.payload;
    },*/
  },
  extraReducers: (builder) => {
    builder.addCase(setAllMovies.pending, (state, action) => {
      console.log(action);
      state.loading = true;
      state.error = null;
    });
    builder.addCase(setAllMovies.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(setAllMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = "Une erreur est survenue";
    });
  },
});

//export const { setAllMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
