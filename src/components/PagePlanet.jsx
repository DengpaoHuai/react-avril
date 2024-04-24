import { Fragment, useEffect, useState } from "react";

const PagePlanet = () => {
  const [planet, setPlanet] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/planets/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanet(data.results);
        setCount(data.count);
      });
  }, [planet]);

  return (
    <div>
      <h1>Planets</h1>
      {planet.map((planet) => {
        return (
          <Fragment key={planet.url}>
            <p>{planet.name}</p>
            <p>{planet.population}</p>
          </Fragment>
        );
      })}
      <button onClick={() => setPage(page - 1)}>Précédent</button>
      <button disabled={count / 10 <= page} onClick={() => setPage(page + 1)}>
        Suivant
      </button>
    </div>
  );
};

export default PagePlanet;
