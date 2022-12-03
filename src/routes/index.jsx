import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { HomePage } from "../pages/home";

export const PageRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home" element={<HomePage user={user} setUser={setUser} />} />
    </Routes>
  );
};
