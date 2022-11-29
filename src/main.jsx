import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledButton } from "./styles/buttons";
import { StyledColors } from "./styles/colors";
import { StyledGlobals } from "./styles/Globals";
import { StyledTypography } from "./styles/typography";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledGlobals />
    <StyledTypography />
    <StyledColors />
    <App />
  </React.StrictMode>
);
