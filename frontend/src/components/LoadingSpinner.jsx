import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <FaSpinner className="animate-spin text-purple-600 text-4xl" />
    </div>
  );
};

export default LoadingSpinner;
