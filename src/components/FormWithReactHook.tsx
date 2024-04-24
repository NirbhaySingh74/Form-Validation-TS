import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TsignUpSchema, signUpSchema } from "../type/types";
const FormWithReactHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TsignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    console.log("form submitted");

    reset();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 w-72 justify-center items-center bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 w-full"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Enter password"
          className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 w-full"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password"
          className="px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500 w-full"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-500 disabled:bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormWithReactHook;
