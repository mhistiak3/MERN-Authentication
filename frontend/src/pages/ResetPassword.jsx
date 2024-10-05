import { useState } from "react";
import InputBox from "../components/InputBox";
import { FaLock, FaSpinner } from "react-icons/fa";
import { useAuthStore } from "../store/auth.store";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { isLoading, resetPassowrd, error } = useAuthStore();
  const { token } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return
    }
   try {
     await resetPassowrd(token, formData.password);

     toast.success("Password reset successfully, Redirecting to login page...");
     setTimeout(() => {
       navigate("/auth/login");
     }, 2000);
   } catch (error) {
      toast.error(error.message);
   }
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
            type={"password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
          {/* Toggle Password Visibility */}
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
            {isLoading ? (
              <FaSpinner className="animate-spin mr-2" />
            ) : (
              "Set New Password"
            )}
          </button>
        </div>
      </form>
      {/* Don't have an account */}
    </div>
  );
};
export default ResetPassword;
