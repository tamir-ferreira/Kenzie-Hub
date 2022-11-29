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
    color: var(--color-gray-0);
    background-color: var(--color-gray-3);

    :hover {
      background-color: var(--color-gray-2);
    }
  `,

  colored: css`
    background-color: var(--color-primary);
    border: 0.125rem solid var(--color-primary);

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

  disable: css`
    background-color: var(--color-primary-disable);
    border: 0.125rem solid var(--color-primary-disable);
    pointer-events: none;
  `,
};

export const StyledButton = styled.button`
  background-color: transparent;
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weigth-2);
  border: none;
  color: var(--color-white);

  :hover {
    cursor: pointer;
  }

  ${({ size }) => buttonVariants[size]}
  ${({ color }) => buttonVariants[color]}
`;
