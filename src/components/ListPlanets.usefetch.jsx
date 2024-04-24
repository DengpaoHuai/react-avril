import { Fragment, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ListPlanets = () => {
  const { data, loading } = useFetch("https://swapi.py4e.com/api/planets/");

  return (
    <div>
      <h1>Planets</h1>
      {loading ? (
        <p>chargement...</p>
      ) : (
        data?.results?.map((planet) => {
          return (
            <Fragment key={planet.url}>
              <p>{planet.name}</p>
              <p>{planet.population}</p>
            </Fragment>
          );
        })
      )}
    </div>
  );
};

export default ListPlanets;
