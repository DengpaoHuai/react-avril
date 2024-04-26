import { createStore } from "redux";
import moviesReducer from "./reducers/movies.reducer";

const store = createStore(moviesReducer);

export default store;
