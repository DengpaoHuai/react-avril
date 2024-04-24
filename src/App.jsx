import "./App.css";
import CustomCard from "./components/CustomCard";
import CustomTitle from "./components/CustomTitle";

function App() {
  let title = "Bienvenue sur le tutoriel";
  let subtitle = "Ceci est un sous-titre";

  return (
    <>
      <CustomTitle title={title} subtitle={subtitle}>
        <button>démarrer le tuto</button>
      </CustomTitle>
      <CustomCard title="Card 1" footerText="Ceci est le pied de la carte 1">
        <h2>Card 1</h2>
        <p>Contenu de la carte 1</p>
      </CustomCard>
    </>
  );
}

export default App;
