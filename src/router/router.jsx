import { createBrowserRouter } from "react-router-dom";
import DemoPage1 from "../pages/DemoPage1";
import DemoPage2 from "../pages/DemoPage2";
import CreateMovie from "../pages/CreateMovie";
import ListMovies from "../pages/ListMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DemoPage1 />,
  },
  {
    path: "/demo-page-2",
    element: <DemoPage2 />,
  },
  {
    path: "/create_movie",
    element: <CreateMovie></CreateMovie>,
  },
  {
    path: "/list_movies",
    element: <ListMovies></ListMovies>,
  },
]);

export default router;
