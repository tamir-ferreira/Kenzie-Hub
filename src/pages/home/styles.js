import styled from "styled-components";

export const StyledHome = styled.main`
  width: 100%;
  header {
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;

    nav {
      display: flex;
      justify-content: space-between;
      /* width: 100%; */
    }
  }

  section:nth-child(2) {
    border-top: 1px solid var(--color-gray-3);
    border-bottom: 1px solid var(--color-gray-3);
    height: 118px;
    display: flex;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  /* position: relative; */

  section:nth-child(3) {
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div:nth-child(1) {
      /* background-color: red; */
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div:nth-child(2) {
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* background-color: red; */
    }

    img {
      /* object-fit: fill; */
      width: 400px;
      border-radius: 50%;
      z-index: 10;
      box-shadow: 0 0 15px var(--color-gray-2);
      /* position: relative; */

      animation: heartbeat 1.5s ease-in-out infinite both;

      @keyframes heartbeat {
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
      }
    }
  }
`;
