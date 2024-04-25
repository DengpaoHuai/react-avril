import { useForm } from "react-hook-form";

export default function CreateMovie() {
  const { register, handleSubmit } = useForm();

  const maSuperbeFunctionDeSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(maSuperbeFunctionDeSubmit)}>
      <input defaultValue="test" {...register("title")} />

      <input {...register("director")} />

      <input type="submit" />
    </form>
  );
}
