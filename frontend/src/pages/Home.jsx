import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to iA Coder!</h1>
      <p className="text-lg mb-6">
        We’re excited to have you here! Start your coding journey with us.
      </p>
      <div className="space-x-4">
        <Link
          to="/auth/register"
          className="inline-block px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md transition duration-300 hover:bg-purple-600 hover:text-white"
        >
          Register
        </Link>
        <Link
          to="/auth/login"
          className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-lg transition duration-300 hover:bg-white hover:text-purple-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
