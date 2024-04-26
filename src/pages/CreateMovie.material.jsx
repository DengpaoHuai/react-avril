import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputText from "../components/ui/form/InputText";
import { Button, TextField } from "@mui/material";
import CustomForm from "../components/ui/form/CustomForm";

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
    <CustomForm onSubmit={handleSubmit(maSuperbeFunctionDeSubmit)}>
      <TextField
        label="title"
        defaultValue="test"
        {...register("title")}
      ></TextField>
      <TextField label="director" {...register("director")}></TextField>

      <Button variant="contained">créer le film</Button>
    </CustomForm>
  );
}
