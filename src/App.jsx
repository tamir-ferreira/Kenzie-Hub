import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage className="container" />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
