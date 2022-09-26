import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error, reset] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (error) {
    return <h1>Error occured</h1>;
  }

  const onSubmit = (data) => {
    console.log(data);
    sendPasswordResetEmail(data.password);
    reset();
  };
  return (
    <div className="flex h-screen justify-center mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="tex-3xl text-center">Reset your Password</h1>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer",
              },
            })}
            type="password"
            placeholder="Type Password"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        <input
          type="submit"
          className="btn w-full max-w-xs text-white"
          value="Reset Password"
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
