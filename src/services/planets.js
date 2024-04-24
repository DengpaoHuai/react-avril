export const getPlanets = async (page = 1) => {
  const response = await fetch(
    `https://swapi.py4e.com/api/planets/?page=${page}`
  );
  await sleep(2000);
  const result = await response.json();
  return result;
};

// sleep fn to simulate a delay

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
