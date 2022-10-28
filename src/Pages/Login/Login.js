import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }
  if (user && !user.emailVerified) {
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">{error?.message || gError?.message}</p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "You need to specify a valid email address",
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
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
            {signInError}

            <input
              type="submit"
              className="btn w-full max-w-xs text-white"
              value="Login"
            />
          </form>
          <p>
            New to Doctor's portal?{" "}
            <Link to="/register" className="text-primary">
              Create new account
            </Link>
          </p>
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
