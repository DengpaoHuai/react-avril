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
    setTimeout(() => {
      fetch("https://swapi.py4e.com/api/planets/?page=1")
        .then((results) => results.json())
        .then((data) => {
          setPlanets(data.results);
        });
    }, 2000);
  }, []);

  const handleClick = (event) => {
    console.log(event);
  };

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

      {true !== true ? <p>vrai</p> : <p>faux</p>}
      {true === true && <p>affichage</p>}

      <button
        disabled={planets.length === 0 ? true : false}
        onClick={(event) => handleClick(event)}
      >
        Précédent
      </button>
      <button onClick={(event) => handleClick(event)}>Suivant</button>
    </div>
  );
};

export default DisplayPlanets;
