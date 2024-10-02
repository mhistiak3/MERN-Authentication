import { Outlet } from "react-router-dom";
import Shap from "./Shap";

const AuthLayout = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
      <Shap />
      {/* Child Routes */}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
