import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TiWarning } from "react-icons/ti";
import api, { LOGIN_ROUTE } from "../api/api";
import { getEmailError, getPasswordError } from "../utils/validation";
import FormField from "../components/FormField";
import ButtonLoading from "../components/ButtonLoading";
import { MdOutlineEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const errorInEmail = getEmailError(loginData.email);
      const errorInPassword = getPasswordError(loginData.password);

      setErrors((prev) => ({
        email: errorInEmail,
        password: errorInPassword,
      }));

      if (/* !errorInEmail && !errorInPassword */ true) {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });

        // // This response contins the access token and user data.
        // const response = await api.post(LOGIN_ROUTE, {
        //   email: "email1@gmail.com",
        //   password: "email1",
        // });
        // // login function inside the AuthContext is ised to set the auth state with token and user data.
        // login(response.data);
        // navigate("/");
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FAFBFC]">
      <div className="absolute -bottom-[55%] -left-20 -right-60 h-screen -rotate-[10deg] rounded-full bg-gradient-to-l from-[#FC466B] to-[#3F5EFB]"></div>
      <Form
        className="absolute left-1/2 top-1/2 flex min-h-[460px] w-[347px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg bg-white px-[22px] py-10 shadow-3xl md:w-[480px] md:px-16"
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

        <div className="mt-3 flex w-full flex-col gap-6">
          <FormField
            type={"text"}
            label={"Work Email"}
            error={errors.email}
            icon={<MdOutlineEmail />}
            value={loginData.email}
            placeholder={"Enter your work email"}
            handleOnChange={(e) =>
              setLoginData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <FormField
            type={"password"}
            label={"Password"}
            error={errors.password}
            icon={<SlLock />}
            value={loginData.password}
            placeholder={"Enter password"}
            handleOnChange={(e) =>
              setLoginData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        <button
          style={loading ? { pointerEvents: "none" } : {}}
          className="mt-9 flex h-[50px] w-full shrink-0 items-center justify-center rounded-lg bg-[#5F55EE] font-medium text-white transition-colors hover:bg-[#544DC9]"
          type="submit"
        >
          {loading ? <ButtonLoading /> : "Log in"}
        </button>
        <div className="absolute -bottom-12 text-sm text-white">
          <span className="text-sm text-white">Don't have an account? </span>
          <Link
            to="/signup"
            className="border-b border-b-[#bababa] transition-colors hover:border-b-white"
          >
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
