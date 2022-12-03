import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";

export const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <AnimatePresence>
        <PageRoutes user={user} setUser={setUser} />
      </AnimatePresence>
    </BrowserRouter>
  );
};
