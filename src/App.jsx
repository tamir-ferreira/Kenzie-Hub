import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./context/Providers";
import { PageRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      {/* <AnimatePresence> */}
      <Providers>
        <PageRoutes />
      </Providers>
      {/* </AnimatePresence> */}
    </BrowserRouter>
  );
};
