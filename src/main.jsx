import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StyledColors } from "./styles/colors";
import { StyledGlobals } from "./styles/globals";
import { StyledTypography } from "./styles/typography";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobals />
      <StyledTypography />
      <StyledColors />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
