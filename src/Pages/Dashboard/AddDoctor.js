import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("service", () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const imgStorageKey = "5dab6e8f78b78ad5ff45b92b33ccd812";

  const onSubmit = async (data) => {
    console.log("data", data);
    // navigate("/appointment");
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log("doctor", inserted);
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add doctor");
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl">Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Enter your name",
              },
            })}
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
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
            <span class="label-text">Specialty</span>
          </label>

          <select
            {...register("specialty")}
            class="select select-bordered w-full max-w-xs"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
            type="file"
            class="input input-bordered w-full max-w-xs"
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          type="submit"
          className="btn w-full max-w-xs text-white mt-2"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
