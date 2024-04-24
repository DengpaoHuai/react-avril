import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ListPlanets from "./components/ListPlanets";
import PagePlanet from "./components/PagePlanet";

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <ListPlanets></ListPlanets>
      </QueryClientProvider>
    </>
  );
}

export default App;
