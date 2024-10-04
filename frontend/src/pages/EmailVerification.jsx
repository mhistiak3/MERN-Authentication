import { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";
import toast from "react-hot-toast";
const EmailVerification = () => {
  const { verifyEmail, isLoading, error } = useAuthStore();
  const [loading, setLoading] = useState(isLoading);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newCode = [...code];
    if (value.length > 1) {
      const pastCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastCode[i] || "";
      }
      setCode(newCode);
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRef.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRef.current[index + 1].focus();
      }
    }
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code.every((digit) => digit !== "")) {
      return;
    }
    const verificationCode = code.join("");
    console.log(verificationCode);
    
    try {
      await verifyEmail(verificationCode);
      setLoading(false);
      navigate("/dashboard");
      toast.success("Email verified successfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);
  return (
    <div className="z-10 bg-white border border-purple-300 rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-3">
        Verify Your Email
      </h2>
      <p className="text-center">
        Enter 6-digit code sent tot your email address.
      </p>
      <form onSubmit={handleSubmit} className="mt-14">
        <div className="flex justify-between">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRef.current[index] = el)}
              type="text"
              maxLength="6"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 text-center border border-gray-300 rounded-lg focus:border-purple-500 transition-colors duration-300"
            />
          ))}
        </div>

        {error && (
          <p className="mt-6 text-center text-sm text-red-700">
            {error}.
          </p>
        )}

        <button
          type="submit"
          className={`w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 flex items-center justify-center mt-4 ${
            !code.every((digit) => digit !== "")
              ? "cursor-not-allowed opacity-70"
              : ""
          } ${loading ? "cursor-not-allowed opacity-70" : ""}`}
          disabled={code.every((digit) => digit !== "")}
        >
          {loading ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : (
            "Verify Email"
          )}
        </button>
      </form>
    </div>
  );
};
export default EmailVerification;
