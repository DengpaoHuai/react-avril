import { useRef, useState } from "react";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  const inputTitle = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputTitle);
  };

  console.log("render");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" ref={inputTitle} />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          id="director"
          name="director"
          value={director}
          onChange={(event) => setDirector(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreateMovie;
