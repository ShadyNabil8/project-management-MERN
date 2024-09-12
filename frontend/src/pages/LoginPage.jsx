import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, useNavigate, Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import api, { LOGIN_ROUTE } from "../api/api";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      // This response contins the access token and user data.
      const response = await api.post(LOGIN_ROUTE, {
        email: "email1@gmail.com",
        password: "email1",
      });

      // login function inside the AuthContext is ised to set the auth state with token and user data.
      login(response.data);

      navigate("/");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FAFBFC]">
      <div className="absolute -bottom-[55%] -left-20 -right-60 h-screen -rotate-[10deg] rounded-full bg-gradient-to-l from-[#FC466B] to-[#3F5EFB]"></div>
      <Form
        className="absolute -right-1/2 left-1/2 flex h-[460px] w-[347px] -translate-x-1/2 translate-y-1/2 flex-col items-center rounded-lg bg-white px-[22px] py-10 shadow-3xl md:w-[480px] md:px-16"
        onSubmit={handleLogin}
      >
        <p className="text-3xl font-bold text-gray-800">Welcome back!</p>
        <button
          className="relative mt-3 flex h-[40px] w-full items-center justify-center rounded-md border p-2 transition-colors hover:bg-[#f7f9fc]"
          type="button"
        >
          <span className="justify-self-center text-gray-700">
            Continue with Google
          </span>
          <FcGoogle className="absolute right-3 text-2xl" />
        </button>
        <div className="mt-3 flex w-full items-center gap-3">
          <hr className="h-[1px] w-1/2 border-t border-[#ddd]"></hr>
          <span className="text-sm text-[#c7c7c7]">OR</span>
          <hr className="h-[1px] w-1/2 border-t border-[#ddd]"></hr>
        </div>
        <label className="mt-3 self-start text-[12px] text-gray-900">
          Work Email
        </label>
        <div className="flex h-[40px] w-full items-center rounded-md border px-2">
          <MdOutlineEmail className="text-2xl text-[#c7c7c7]" />
          <input
            className="w-full bg-transparent p-3 text-sm focus:outline-none"
            placeholder="Enter your work email"
            type="text"
            value={loginData.email}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, email: e.target.value }))
            }
          ></input>
        </div>

        <label className="mt-4 self-start text-[12px] text-gray-900">
          Password
        </label>
        <div className="flex h-[40px] w-full items-center rounded-md border px-2">
          <SlLock className="text-xl text-[#c7c7c7]" />
          <input
            className="w-full bg-transparent p-3 text-sm focus:outline-none"
            placeholder="Enter Password"
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
          ></input>
        </div>
        <button
          className="mt-7 h-[50px] w-full rounded-lg bg-[#5F55EE] font-medium text-white transition-colors hover:bg-[#544DC9]"
          type="submit"
        >
          Log in
        </button>
        <div className="absolute -bottom-12 text-sm text-white">
          <span className="text-sm text-white">Don't have an account? </span>
          <Link className="border-b border-b-[#bababa] transition-colors hover:border-b-white">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

{
  /* <Form onSubmit={handleLogin}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </Form> */
}
