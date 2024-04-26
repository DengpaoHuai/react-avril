export const SET_ALL_MOVIES = "SET_ALL_MOVIES";

export const setAllMovies = (movies) => {
  return {
    type: SET_ALL_MOVIES,
    payload: movies,
  };
};
