
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useAuthStore } from "../store/auth.store";

const Dashboard = () => {
  const { user, isCheckeingAuth } = useAuthStore();
 

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      {/* Profile Component */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl flex items-center">
        {isCheckeingAuth ? (
          <FaSpinner className="animate-spin mr-2" />
        ) : (
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.name}
            </h2>
            <p className="text-gray-600">{user?.email}</p>
            {user?.isVerified && (
              <div className="flex items-center mt-2 text-green-600">
                <FaCheckCircle className="mr-1" />
                <span>Verified</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
