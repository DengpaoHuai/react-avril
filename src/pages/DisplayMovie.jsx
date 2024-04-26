import { useParams } from "react-router-dom";

const DisplayMovie = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Display Movie {id}</h1>
    </div>
  );
};

export default DisplayMovie;
