import { FaCheckCircle } from "react-icons/fa";
import { useAuthStore } from "../store/auth.store";
import { formateDate } from "../../utils/formateDate";

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      {/* Profile Component */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl flex justify-between ">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">{user?.name}</h2>
          <p className="text-gray-500 text-lg">{user?.email}</p>

          <p className="text-gray-600">
            <b>Joined: </b>
            {new Date(user?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <span className="text-gray-600">
            <b>Last Login: </b>
            {user?.lastLogin
              ? formateDate(user?.lastLogin)
              : "You just signed up!"}
          </span>

          {user?.isVerified && (
            <div className="flex items-center mt-2 text-green-600">
              <FaCheckCircle className="mr-1" />
              <span className="font-semibold">Verified</span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 transition-colors px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
