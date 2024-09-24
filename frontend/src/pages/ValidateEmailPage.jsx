import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, useNavigate, Link, useSearchParams } from "react-router-dom";
import api from "../api/api";
import ButtonLoading from "../components/ButtonLoading";
import { emailImage } from "../assets/images";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ValidateEmailPage = () => {
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const { user, setUser } = useAuth();

  const inputRef = useRef(null);
  const verificationEffectRan = useRef(false);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const verificationCodeParam = searchParams.get("verificationCode");

  const verifyEmail = async (verificationCode) => {
    try {
      await api.get("/user/verify-email", {
        params: { verificationCode },
      });
      setUser((prev) => ({
        ...prev,
        isVerified: true,
      }));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong in email verification!",
      );
      throw error;
    }
  };

  const resendVerificationCode = async (email) => {
    try {
      await api.post("/user/resend-verification-code", { email });
      toast.success("Verification code has been resent");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleValidation = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await verifyEmail(verificationCode);
    } catch (error) {
      // Error is handled within verifyEmail
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (verificationEffectRan.current === false && verificationCodeParam) {
      setLoading(true);
      verifyEmail(verificationCodeParam).finally(() => setLoading(false));
      verificationEffectRan.current = true;
    }
  }, [verificationCodeParam]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#FAFBFC]">
      <div className="absolute -bottom-[55%] -left-20 -right-60 h-screen -rotate-[10deg] rounded-full bg-gradient-to-l from-[#FC466B] to-[#3F5EFB]"></div>
      <Form
        className="absolute left-1/2 top-1/2 flex min-h-[460px] w-[347px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-lg bg-white px-[22px] py-10 shadow-3xl md:w-[480px] md:px-16"
        onSubmit={handleValidation}
      >
        <p className="text-3xl font-bold text-text-color-light">Seconds to sign up! </p>
        <img src={emailImage} className="size-[200px]"></img>
        <p className="self-start text-2xl text-text-color-light">
          We just emailed you.
        </p>
        <p className="text-md mt-4 self-start text-text-color-light">
          Please enter the code we emailed you.
        </p>
        <p className="text-md self-start text-text-color-light">{user.email}</p>
        <p className="mt-4 self-start text-sm text-text-color-light">
          Confirmation code
        </p>
        <input
          ref={inputRef}
          className="mt-1 w-full border-b text-center text-[32px] focus:outline-none"
          value={verificationCode || verificationCodeParam || ""}
          onChange={(e) => setVerificationCode(e.target.value)}
        ></input>
        <button
          style={loading ? { pointerEvents: "none" } : {}}
          className="mt-6 flex h-[50px] w-full shrink-0 items-center justify-center rounded-lg bg-[#5F55EE] font-medium text-white transition-colors hover:bg-[#544DC9]"
          type="submit"
        >
          {loading ? <ButtonLoading /> : "Verify"}
        </button>
        <div className="absolute bottom-2 flex gap-1 text-[13px] text-[#4f7cdd]">
          <button
            className="underline"
            type="button"
            onClick={(e) => resendVerificationCode(user.email)}
          >
            Resend code
          </button>
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
