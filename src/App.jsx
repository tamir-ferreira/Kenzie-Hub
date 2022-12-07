import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { TechProvider } from "./context/TechContext";
import { UserProvider } from "./context/UserContext";
import { PageRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <UserProvider>
          <TechProvider>
            <PageRoutes />
          </TechProvider>
        </UserProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
};
