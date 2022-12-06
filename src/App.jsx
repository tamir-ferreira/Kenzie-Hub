import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { PageRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <UserProvider>
          <PageRoutes />
        </UserProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
};
