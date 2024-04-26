import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/CustomButton";
import InputText from "../components/ui/form/InputText";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContextProvider";

export default function CreateMovie() {
  const { register, handleSubmit } = useForm();
  const { createMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const maSuperbeFunctionDeSubmit = async (data) => {
    await createMovie(data);
    navigate("/list_movies");
  };

  return (
    <form onSubmit={handleSubmit(maSuperbeFunctionDeSubmit)}>
      <InputText defaultValue="test" {...register("title")}></InputText>
      <InputText {...register("director")}></InputText>

      <Button title="créer le film"></Button>
    </form>
  );
}
