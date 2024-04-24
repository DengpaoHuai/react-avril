import { Fragment, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "../services/planets";

const ListPlanets = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => getPlanets(page),
    gcTime: 1000000,
    staleTime: 5000,
  });

  return (
    <div>
      <h1>Planets</h1>
      {isLoading ? (
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
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Page précèdente
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Page suivante
      </button>
    </div>
  );
};

export default ListPlanets;
