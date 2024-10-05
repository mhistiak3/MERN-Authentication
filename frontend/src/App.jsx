import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import Home from "./pages/Home";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import { useAuthStore } from "./store/auth.store";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// Protected Routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }
  if (!user?.isVerified) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};
const App = () => {
  const { isCheckeingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckeingAuth) {
    return <LoadingSpinner />;
  }
 

  return (
    <>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<AuthLayout />}>
          {/* Child Routes */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="email-verify" element={<EmailVerification />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
export default App;
