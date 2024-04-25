import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

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
