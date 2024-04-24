import { Fragment } from "react";
import { planets } from "./planets";

const DisplayPlanets = () => {
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
