import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    addEventListener("mousemove", (event) => {
      console.log(event);
    });
  }, []);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/planets/");
  }, [count2, count]);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/planets/");
  }, [count2]);

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/planets/");
  }, []);

  return (
    <>
      <h1>Mon compteur</h1>
      <p>La valeur de mon count est de : {count}. Merci</p>
      <button onClick={increment}>increment</button>
      <h2>Mon second compteur</h2>
      <p>La valeur de mon count2 est de : {count2}. Merci</p>
      <button onClick={() => setCount2(count2 + 1)}>increment</button>
    </>
  );
}

export default App;
