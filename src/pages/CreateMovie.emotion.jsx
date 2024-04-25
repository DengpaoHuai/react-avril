import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/CustomButton";
import InputText from "../components/ui/form/InputText";
import { css } from "@emotion/react";

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
    <form
      className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
      `}
      onSubmit={handleSubmit(maSuperbeFunctionDeSubmit)}
    >
      <InputText defaultValue="test" {...register("title")}></InputText>
      <InputText {...register("director")}></InputText>

      <Button title="créer le film"></Button>
    </form>
  );
}
