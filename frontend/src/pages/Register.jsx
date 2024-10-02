import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
