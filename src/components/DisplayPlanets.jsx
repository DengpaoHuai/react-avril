import { Fragment, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const DisplayPlanets = () => {
  const [planets, setPlanets] = useState({
    results: [],
    count: 0,
    next: null,
    previous: null,
  });

  const getData = async (url) => {
    const results = await fetch(url);
    const response = await results.json();
    setPlanets(response);
  };

  useEffect(() => {
    getData("https://swapi.py4e.com/api/planets/");
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      {planets.results.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <p>{planet.name}</p>
            <p>{planet.population}</p>
          </Fragment>
        );
      })}

      <button
        disabled={planets.previous === null}
        onClick={() => getData(planets.previous)}
      >
        Précédent
      </button>
      <button
        disabled={planets.next === null}
        onClick={() => getData(planets.next)}
      >
        Suivant
      </button>
    </div>
  );
};

export default DisplayPlanets;
