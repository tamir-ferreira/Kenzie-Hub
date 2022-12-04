import { createGlobalStyle } from "styled-components";

export const StyledGlobals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --border-radius-1: 4px;
    color: var(--color-gray-0);
  }

  body {
    background: var(--color-gray-4);
    max-width: 100vw;

  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 780px;
    margin: 0 auto;
  }

  .beat{
    animation: flip 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

  input.error,
  select.error,
  input.error:focus,
  select.error:focus{
    border-color: red;
  }

  ::-webkit-scrollbar-track { background-color: var(--color-gray-20) }
  ::-webkit-scrollbar { width: .4375rem; height: .4375rem;}
  ::-webkit-scrollbar-thumb { background: var(--color-primary-50); border-radius: var(--border-radius-1)}
`;
