import { SET_ALL_MOVIES } from "../actions/movies.actions";

const initialState = {
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export default moviesReducer;
