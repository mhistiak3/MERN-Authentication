import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import Home from "./pages/Home";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import EmailVerification from "./pages/EmailVerification";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import { useAuthStore } from "./store/auth.store";
import { useEffect } from "react";


const App = () => {
  const { isCheckeingAuth, checkAuth, isAuthenticated,user } = useAuthStore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);
  
  console.log("Is Checking Auth:", isCheckeingAuth);
  console.log("Is Auth:", isAuthenticated);
  console.log("User:", user);
  
  return (
    <>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth" element={<AuthLayout />}>
          {/* Child Routes */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="email-verify" element={<EmailVerification />} />
        </Route>
      </Routes>
      <Toaster/>
    </>
  );
};
export default App;
