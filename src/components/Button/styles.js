import styled, { css } from "styled-components";

const buttonVariants = {
  default: css`
    height: 48px;
    padding: 0 22px;
    font-size: var(--font-size-2);
  `,

  small: css`
    height: 32px;
    padding: 0 16px;
    font-size: var(--font-size-4);
  `,

  plus: css`
    width: 32px;
    height: 32px;
  `,

  colored: css`
    width: 100%;
    background-color: var(--color-primary);
    border: 0.125rem solid var(--color-primary);
    animation: pulsate-bck 1s ease-in-out infinite both;

    :hover {
      background-color: var(--color-primary-focus);
      border: 0.125rem solid var(--color-primary-focus);
    }
  `,

  gray: css`
    background-color: var(--color-gray-1);
    border: 0.125rem solid var(--color-gray-1);

    :hover {
      background-color: var(--color-gray-2);
      border: 0.125rem solid var(--color-gray-2);
    }
  `,

  dark_gray: css`
    color: var(--color-gray-0);
    background-color: var(--color-gray-3);

    :hover {
      background-color: var(--color-gray-2);
    }
  `,

  disabled: css`
    background-color: var(--color-primary-disable);
    border: 0.125rem solid var(--color-primary-disable);
    pointer-events: none;
  `,

  image: css`
    :focus {
      animation: heartbeat 1.5s ease-in-out 1s infinite both;
    }
  `,
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weigth-2);
  border: none;
  color: var(--color-white);

  :hover {
    cursor: pointer;
  }

  @keyframes pulsate-bck {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.98);
    }
    100% {
      transform: scale(1);
    }
  }

  ${({ size }) => buttonVariants[size]}
  ${({ color }) => buttonVariants[color]}
`;
