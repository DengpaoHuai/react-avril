import { Outlet } from "react-router-dom";
import MovieContextProvider from "../contexts/MovieContextProvider";

const MovieLayout = () => {
  return (
    <>
      <MovieContextProvider>
        <h1>Movies !!!</h1>
        <Outlet></Outlet>
      </MovieContextProvider>
    </>
  );
};

export default MovieLayout;
