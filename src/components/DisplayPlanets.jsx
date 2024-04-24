import { Fragment, useEffect, useState } from "react";

const DisplayPlanets = () => {
  const [planets, setPlanets] = useState([]);
  /*
  const getData = async () => {
    const results = await fetch("https://swapi.py4e.com/api/planets/");
    const response = await results.json();
    setPlanets(response.results);
  };

  useEffect(() => {
    getData();
  }, []);*/

  useEffect(() => {
    fetch("https://swapi.py4e.com/api/planets/")
      .then((results) => results.json())
      .then((data) => {
        setPlanets(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      {planets.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <p>{planet.name}</p>
            <p>{planet.population}</p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default DisplayPlanets;
