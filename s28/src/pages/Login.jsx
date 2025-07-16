import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FirstComp = () => {
  const schema = yup.object({
    email: yup.string().required().email(),
    name: yup.string().min(3).max(255),
  });

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: "Jay",
    },
    resolver: yupResolver(schema),
  });

  const submitted = (data) => {
    console.log("submitted", data);
  };

  return (
    <div>
      Login page
      <form onSubmit={handleSubmit(submitted)}>
        <div>
          <label>Name</label>
          <input {...register("name")} />{" "}
          <div>{formState.errors.name && formState.errors.name.message}</div>
        </div>
        <div>
          <label>email</label>
          <input {...register("email")} />
          <div>{formState.errors.email && formState.errors.email.message}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const SecondComp = () => {
  const { handleSubmit, control } = useForm();

  const submitted = (data) => {
    console.log("submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(submitted)}>
      <Controller
        name="name"
        control={control}
        defaultValues="Jay"
        render={({ field }) => <input {...field} />}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const Login = () => {
  return (
    <div>
      <FirstComp />
      <hr />
      <SecondComp />
    </div>
  );
};

export default Login;
