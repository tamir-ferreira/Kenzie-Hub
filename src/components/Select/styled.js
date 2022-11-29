import styled from "styled-components";

export const StyledSelect = styled.select`
  font-size: var(--font-size-2);
  padding-left: 16px;
  height: 48px;
  outline: none;
  color: var(--color-gray-1);
  background-color: var(--color-gray-2);
  border: 1px solid var(--color-gray-2);
  border-radius: var(--border-radius-1);

  ::placeholder {
    color: var(--color-gray-1);
  }

  :focus {
    border-color: var(--color-gray-0);
    color: var(--color-gray-0);
  }
`;
