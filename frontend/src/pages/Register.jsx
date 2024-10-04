import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/auth.store";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { singUp, error, isLoading } = useAuthStore();
  const [loading, setLoading] = useState(isLoading);
  const [isErr, setIsErr] = useState(error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
      try {
        // Name validation
        if (!name || name.trim().length < 2) {
          throw Error("Name must be at least 2 characters long.");
        }
        // Email validation (simple email regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
          throw Error("Please enter a valid email address.");
        }

        setLoading(true);
        await singUp(name, email, password);
        setLoading(false);
        setIsErr(null);
        navigate("email-verify");
      } catch (error) {
        setIsErr(error.message);
      }
  };

  return (
    <div className="z-10 bg-white border border-purple-300 rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <InputBox
          formData={formData.name}
          handleChange={handleChange}
          IconComponent={FaUser}
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
        />

        {/* Email Field */}
        <InputBox
          formData={formData.email}
          handleChange={handleChange}
          IconComponent={FaEnvelope}
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />

        {/* Password Field */}
        <InputBox
          formData={formData.password}
          handleChange={handleChange}
          IconComponent={FaLock}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {/* Password Strength Meter */}
        <PasswordStrengthMeter password={formData.password} />

        {isErr && <p className="text-red-500 font-semibold mt-3">{isErr}</p>}
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300 flex items-center justify-center ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
          >
            {loading ? <FaSpinner className="animate-spin mr-2" /> : "Register"}
          </button>
        </div>
      </form>
      {/* Already have an account */}
      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-purple-500 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
