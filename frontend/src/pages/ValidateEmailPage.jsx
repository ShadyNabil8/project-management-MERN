import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, useNavigate, Link } from "react-router-dom";
import api, { LOGIN_ROUTE } from "../api/api";
import ButtonLoading from "../components/ButtonLoading";
import { emailImage } from "../assets/images";

const ValidateEmailPage = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const inputRef = useRef(null);
  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FAFBFC]">
      <div className="absolute -bottom-[55%] -left-20 -right-60 h-screen -rotate-[10deg] rounded-full bg-gradient-to-l from-[#FC466B] to-[#3F5EFB]"></div>
      <Form
        className="absolute left-1/2 top-1/2 flex min-h-[460px] w-[347px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg bg-white px-[22px] py-10 shadow-3xl md:w-[480px] md:px-16"
        onSubmit={handleLogin}
      >
        <p className="text-3xl font-bold text-gray-800">Seconds to sign up! </p>

        <img src={emailImage} className="size-[200px]"></img>
        <p className="self-start text-2xl text-gray-800">
          We just emailed you.
        </p>
        <p className="text-md mt-4 self-start text-gray-400">
          Please enter the code we emailed you.
        </p>
        <p className="text-md self-start text-gray-800">{user.email}</p>
        <p className="mt-4 self-start text-sm text-gray-800">
          Confirmation code
        </p>
        <input
          ref={inputRef}
          className="mt-1 w-full border-b text-center text-[32px] focus:outline-none"
        ></input>
        <button
          className="mt-6 flex h-[50px] w-full shrink-0 items-center justify-center rounded-lg bg-[#5F55EE] font-medium text-white transition-colors hover:bg-[#544DC9]"
          type="submit"
        >
          {loading ? <ButtonLoading /> : "Verify"}
        </button>
        <div className="absolute bottom-2 flex gap-1 text-[13px] text-[#4f7cdd]">
          <Link to="/signup" className="underline">
            Resend code
          </Link>
          <span>or</span>
          <Link to="/signup" className="underline">
            Logout
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default ValidateEmailPage;
