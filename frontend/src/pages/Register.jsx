import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const [strengthColor, setStrengthColor] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "password") {
      evaluatePasswordStrength(e.target.value);
    }
  };

  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength("Weak");
      setStrengthColor("bg-red-500");
    } else if (password.length >= 6 && password.length < 10) {
      setPasswordStrength("Medium");
      setStrengthColor("bg-yellow-500");
    } else if (password.length >= 10) {
      setPasswordStrength("Strong");
      setStrengthColor("bg-green-500");
    } else {
      setPasswordStrength("");
      setStrengthColor("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="z-10 bg-white border border-purple-300 rounded-lg shadow-lg p-8 max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
            placeholder="Full Name"
            required
          />
        </div>
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
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 text-base bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-300"
            placeholder="Password"
            required
          />
          {/* Password Strength Indicator */}
          {passwordStrength && (
            <div className="mt-5">
              <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                <div
                  className={`h-2 rounded-full ${strengthColor}`}
                  style={{
                    width: `${
                      passwordStrength === "Weak"
                        ? "33%"
                        : passwordStrength === "Medium"
                        ? "66%"
                        : "100%"
                    }`,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-300"
          >
            Register
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
