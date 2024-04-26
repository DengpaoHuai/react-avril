import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/CustomButton";
import InputText from "../components/ui/form/InputText";
import useMovieStore from "../zustand/useMoviesStore";

export default function CreateMovie() {
  const { register, handleSubmit } = useForm();
  const { addMovie } = useMovieStore();
  const navigate = useNavigate();

  const maSuperbeFunctionDeSubmit = async (data) => {
    /* createMovie(data).then(() => {
      navigate("/list_movies");
    })*/

    await addMovie(data);
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
