import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((results) => results.json())
        .then((data) => {
          setData(data.results);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetch;
