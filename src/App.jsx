import "./App.css";
import CustomTitle from "./components/CustomTitle";

function App() {
  let title = "Bienvenue sur le tutoriel";
  let subtitle = "Ceci est un sous-titre";

  return (
    <>
      <CustomTitle title={title} subtitle={subtitle}>
        <button>démarrer le tuto</button>
      </CustomTitle>
    </>
  );
}

export default App;
