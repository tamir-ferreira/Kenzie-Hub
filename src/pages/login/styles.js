import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100%;
  max-width: 370px;
  margin: 0 auto;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 48px 0 35px 0;
    /* border: 1px solid yellow; */
  }
  main {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    padding: 42px 22px 30px 22px;
    align-items: center;
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);
    /* border: 1px solid yellow; */

    > p {
      margin: 34px 0 22px 0;
    }

    button {
      width: 100%;
    }
  }
`;
