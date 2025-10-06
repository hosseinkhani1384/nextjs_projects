"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { POST } from "@/api/crud";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const data = await POST("http://localhost:4000/api/auth/login", formData);

      alert("✅ Login successful!");
      router.push("/"); 
    } catch (error) {
      const message = error.response?.data?.error || "Unknown error";

  
      setError("server", {
        type: "manual",
        message: message,
      });
    }
  };

  return (
    <div className="flex justify-center mt-20 px-10 md:px-5 lg:px-0">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <div className="flex justify-center gap-4 mb-4">
          <Link href="/login" className="btn btn-sm btn-neutral cursor-target">
            Login
          </Link>
          <Link href="/register" className="btn btn-sm btn-ghost cursor-target">
            Sign Up
          </Link>
        </div>

        <legend className="fieldset-legend">Login</legend>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <label className="label">Username</label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Enter Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username.message}</span>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input input-bordered"
            placeholder="Enter Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}

          {errors.server && (
            <span className="text-red-500 text-sm">{errors.server.message}</span>
          )}

          <button className="btn btn-neutral mt-4 cursor-target" type="submit">
            Login
          </button>
        </form>
      </fieldset>
    </div>
  );
}
