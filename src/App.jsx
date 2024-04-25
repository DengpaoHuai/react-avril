import { RouterProvider } from "react-router-dom";
import "./App.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import router from "./router/router";
import MovieContextProvider from "./contexts/MovieContextProvider";

function App() {
  return (
    <>
      <MovieContextProvider>
        <RouterProvider router={router} />
      </MovieContextProvider>
    </>
  );
}

/*
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}*/

/*
UNIQUEMENT POUR LES FANS DE MATERIAL UI
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}*/

export default App;
