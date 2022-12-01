import { createGlobalStyle } from "styled-components";

export const StyledGlobals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --border-radius-1: 4px;
    /* --border-radius-2: .3125rem; */
    color: var(--color-gray-0);
  }

  body {
    background: var(--color-gray-4);
  }

  /* 
  main {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 60px;
  } */

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }

  input.error,
  select.error,
  input.error:focus,
  select.error:focus{
    border-color: red;
    /* background-color: red; */
  }

  /* @media only screen and (max-width: 37.5rem) {
    main{
      width: 100%;
      padding: 1rem;
      flex-direction: column;
      text-align: center;
    }
  } */

  ::-webkit-scrollbar-track { background-color: var(--color-gray-20) }
  ::-webkit-scrollbar { width: .4375rem; height: .4375rem;}
  ::-webkit-scrollbar-thumb { background: var(--color-primary-50); border-radius: var(--border-radius-1)}
`;
