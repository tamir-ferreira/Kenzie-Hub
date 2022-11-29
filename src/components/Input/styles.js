import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  input {
    padding-left: 16px;
    height: 48px;
    outline: none;
    background-color: var(--color-gray-2);
    border: 1px solif var(--color-gray-2);
  }
`;
