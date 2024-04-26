import { createAsyncThunk } from "@reduxjs/toolkit";

export const setAllMovies = createAsyncThunk("getall/movies", async () => {
  await sleep(2000);
  const response = await fetch(
    "https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies"
  );
  const result = await response.json();
  return result;
});

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
