import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateMovie() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const maSuperbeFunctionDeSubmit = (data) => {
    fetch("https://crudcrud.com/api/046f91d286c8425c94758290f8abbfae/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/list_movies");
    });
  };

  return (
    <form onSubmit={handleSubmit(maSuperbeFunctionDeSubmit)}>
      <input defaultValue="test" {...register("title")} />

      <input {...register("director")} />

      <input type="submit" />
    </form>
  );
}
