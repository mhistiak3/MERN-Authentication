import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

import Home from "./pages/Home";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          {/* Child Routes */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        
        </Route>
      </Routes>
    </>
  );
};
export default App;
