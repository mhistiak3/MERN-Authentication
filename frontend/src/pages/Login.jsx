import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="z-10 bg-white border border-purple-300 rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
            placeholder="Email Address"
            required
          />
        </div>
        {/* Password Field */}
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
            placeholder="Password"
            required
          />
          {/* Toggle Password Visibility */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-gray-400 hover:text-purple-500 transition-colors duration-300"
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          >
            Login
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

export default Login;
