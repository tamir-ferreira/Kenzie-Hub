import styled from "styled-components";

export const StyledDashboard = styled.main`
  width: 100%;
  header {
    background-color: var(--color-gray-4);
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  section:nth-child(2) {
    border-top: 1px solid var(--color-gray-3);
    border-bottom: 1px solid var(--color-gray-3);
    height: 118px;
    display: flex;
    margin-top: 72px;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  section:nth-child(3) {
    margin-top: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 21px;

    div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-radius: var(--border-radius-1);
      background-color: var(--color-gray-3);
      padding: 23px;
    }
  }

  @media only screen and (max-width: 600px) {
    header {
      padding: 0 12px;
    }

    section {
      padding: 0 12px;
    }

    section:nth-child(2) > div {
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      align-items: flex-start;
    }

    section:nth-child(3) > ul {
      padding: 23px 8.5px;
    }
  }
`;
