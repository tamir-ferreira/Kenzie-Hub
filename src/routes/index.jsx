import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { DashboardPage } from "../pages/dashboard";

export const PageRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="register" element={<RegisterPage />} />
      <Route
        path="dashboard"
        element={<DashboardPage user={user} setUser={setUser} />}
      />
    </Routes>
  );
};
