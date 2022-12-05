import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  max-width: 370px;
  margin: 0 auto;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px 0 35px 0;
  }

  main {
    display: flex;
    flex-direction: column;
    padding: 42px 22px 30px 22px;
    align-items: center;
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);
    border-radius: var(--border-radius-1);

    > p {
      margin: 34px 0 22px 0;
    }

    a,
    button {
      width: 100%;
    }

    @media only screen and (max-width: 600px) {
      margin: 12px;
    }
  }
`;
