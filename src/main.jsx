import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StyledColors } from "./styles/colors";
import { StyledGlobals } from "./styles/globals";
import { StyledTypography } from "./styles/typography";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "var(--color-gray-3)",
            boxShadow: "0 0 4px var(--color-gray-4)",
          },
        }}
      />
    </div>
    <BrowserRouter>
      <StyledGlobals />
      <StyledTypography />
      <StyledColors />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
