import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import FormField from "../components/FormField";
import { useAuth } from "../context/AuthContext";
import { MdOutlineEmail } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { LuUser2 } from "react-icons/lu";
import {
  getEmailError,
  getFullNameError,
  getPasswordError,
} from "../utils/validation";
import ButtonLoading from "../components/ButtonLoading";
import api, { REGISTER_ROUTE } from "../api/api";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: null,
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const errorInEmail = getEmailError(signupData.email);
      const errorInPassword = getPasswordError(signupData.password);
      const errorInFullName = getFullNameError(signupData.fullName);

      setErrors((prev) => ({
        fullName: errorInFullName,
        email: errorInEmail,
        password: errorInPassword,
      }));

      if (!errorInEmail && !errorInPassword && !errorInFullName) {
        const response = await api.post(REGISTER_ROUTE, {
          fullName: signupData.fullName,
          email: signupData.email,
          password: signupData.password,
        });

        // login function inside the AuthContext is ised to set the auth state with token and user data.
        login(response.data);

        navigate("/verify-email");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FAFBFC]">
      <div className="absolute -bottom-[55%] -left-20 -right-60 h-screen -rotate-[10deg] rounded-full bg-gradient-to-l from-[#FC466B] to-[#3F5EFB]"></div>
      <Form
        className="absolute left-1/2 top-1/2 flex min-h-[460px] w-[347px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg bg-white px-[22px] py-10 shadow-3xl md:w-[480px] md:px-16"
        onSubmit={handleSignup}
      >
        <p className="text-3xl font-bold text-gray-800">Seconds to sign up! </p>

        <div className="mt-3 flex w-full flex-col gap-6">
          <FormField
            type={"text"}
            label={"Full name"}
            error={errors.fullName}
            icon={<LuUser2 />}
            value={signupData.fullName}
            placeholder={"Shady Nabil"}
            handleOnChange={(e) =>
              setSignupData((prev) => ({ ...prev, fullName: e.target.value }))
            }
          />

          <FormField
            type={"text"}
            label={"Work Email"}
            error={errors.email}
            icon={<MdOutlineEmail />}
            value={signupData.email}
            placeholder={"Enter your work email"}
            handleOnChange={(e) =>
              setSignupData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <FormField
            type={"password"}
            label={"Password"}
            error={errors.password}
            icon={<SlLock />}
            value={signupData.password}
            placeholder={"Enter password"}
            handleOnChange={(e) =>
              setSignupData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        <button
          style={loading ? { pointerEvents: "none" } : {}}
          className="mt-9 flex h-[50px] w-full shrink-0 items-center justify-center rounded-lg bg-[#5F55EE] font-medium text-white transition-colors hover:bg-[#544DC9]"
          type="submit"
        >
          {loading ? <ButtonLoading /> : "Signup"}
        </button>
        <button
          className="relative mt-5 flex h-[40px] w-full items-center justify-center rounded-md border p-2 transition-colors hover:bg-[#f7f9fc]"
          type="button"
        >
          <span className="justify-self-center text-gray-700">
            Continue with Google
          </span>
          <FcGoogle className="absolute right-3 text-2xl" />
        </button>
      </Form>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Slide
      />
    </div>
  );
};

export default SignupPage;
