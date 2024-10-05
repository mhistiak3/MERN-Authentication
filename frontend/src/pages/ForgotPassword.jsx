import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaSpinner } from "react-icons/fa";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  let isLoading = false;
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {};
  return (
    <div className="z-10 bg-white border border-purple-300 rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Forgot Password
      </h2>
     <p className="text-center my-5">Enter your email address and we will send you a password reset link.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <InputBox
          formData={email}
          handleChange={handleChange}
          IconComponent={FaEnvelope}
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />

        <p className="text-red-600 text-sm font-semibold">{""}</p>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 flex items-center justify-center ${
              isLoading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {isLoading ? <FaSpinner className="animate-spin mr-2" /> : "Send Reset Link"}
          </button>
        </div>
      </form>
    <Link to="/auth/login" className="inline-block px-6 py-3 border border-purple-600 text-purple-600 font-semibold rounded-lg flex items-center mt-5 justify-center"> Back To Login <FaArrowRight className="ml-3 mt-1" /></Link>
    </div>
  );
};
export default ForgotPassword;
