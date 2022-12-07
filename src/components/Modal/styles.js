import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  background-color: var(--color-opacity);

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 369px;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
      background-color: var(--color-gray-2);
      color: var(--color-gray-0);

      > h4 {
        color: var(--color-gray-0);
      }

      > button {
        /* width: 20px; */
        font-size: 16px;
        color: var(--color-gray-1);
        :hover {
          transform: scale(1.2);
          color: var(--color-negative);
        }
      }
    }

    > form {
      padding: 24px 22px 32px 22px;
      border-radius: 0 0 var(--border-radius-1) var(--border-radius-1);
      background-color: var(--color-gray-3);
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
