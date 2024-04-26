import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function CreateMovie() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const maSuperbeFunctionDeSubmit = (data) => {
    fetch("https://crudcrud.com/api/4c6d779733384fc59d6d008314c1352a/movies", {
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
    <form
      className="flex flex-column gap-2"
      onSubmit={handleSubmit(maSuperbeFunctionDeSubmit)}
    >
      <InputText defaultValue="test" {...register("title")}></InputText>
      <InputText {...register("director")}></InputText>

      <Button className="mt-5" severity="info" label="créer le film"></Button>
    </form>
  );
}
