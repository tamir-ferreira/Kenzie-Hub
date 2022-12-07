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

      li {
        padding: 13px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: var(--border-radius-1);
        background-color: var(--color-gray-4);

        div {
          display: flex;
          align-items: center;
          gap: 22px;

          span:last-child:hover {
            cursor: pointer;
            color: var(--color-negative);
          }
        }

        :hover {
          background-color: var(--color-gray-2);
          div > span {
            color: var(--color-gray-0);
          }
        }
      }
    }

    /*     div:nth-child(3) {
      background-color: red;
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    } */

    /* img {
      cursor: help;
      width: 400px;
      border-radius: 50%;
      z-index: 10;
      box-shadow: 0 0 15px var(--color-gray-2);
    } */

    /*  @keyframes heartbeat {
      from {
        transform: scale(1);
        transform-origin: center center;
        animation-timing-function: ease-out;
      }
      10% {
        transform: scale(0.91);
        animation-timing-function: ease-in;
      }
      17% {
        transform: scale(0.98);
        animation-timing-function: ease-out;
      }
      33% {
        transform: scale(0.87);
        animation-timing-function: ease-in;
      }
      45% {
        transform: scale(1);
        animation-timing-function: ease-out;
      }
    } */
  }

  /*  @keyframes flip {
    0% {
      transform: translateY(0) rotateX(0);
      transform-origin: 50% 100%;
    }
    100% {
      transform: translateY(100%) rotateX(180deg);
      transform-origin: 50% 0;
    }
  } */

  @media only screen and (max-width: 600px) {
    padding: 0 12px;

    section:nth-child(3) {
      width: 100%;

      /*  img {
        width: 95%;
        object-fit: fill;
      } */
    }
  }
`;
