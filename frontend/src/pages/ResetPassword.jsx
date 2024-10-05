import { useState } from "react";
import InputBox from "../components/InputBox";
import { FaLock, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const ResetPassword = () => {
   const [formData, setFormData] = useState({
     password: "",
     confirmPassword: "",
   });
   const [showPassword, setShowPassword] = useState(false);
   const {isLoading,resetPasowrd,error}=useAuthStore()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="z-10 bg-white border border-purple-300 rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
       Reset Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <InputBox
          formData={formData.password}
          handleChange={handleChange}
          IconComponent={FaLock}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />

        <div className="relative">
          {/* Password Field */}
          <InputBox
            formData={formData.confirmPassword}
            handleChange={handleChange}
            IconComponent={FaLock}
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          {/* Toggle Password Visibility */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-gray-400 hover:text-purple-500 transition-colors duration-300 "
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>
    
        <p className="text-red-600 text-sm font-semibold">{error}</p>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 flex items-center justify-center ${
              isLoading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {isLoading ? <FaSpinner className="animate-spin mr-2" /> : "Login"}
          </button>
        </div>
      </form>
      {/* Don't have an account */}
      <p className="mt-6 text-center text-sm text-gray-500">
        Don{"'"}t have an account?{" "}
        <Link to="/auth/register" className="text-purple-500 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};
export default ResetPassword;
