import styled from "styled-components";

export const StyledCardTech = styled.li`
  padding: 15px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius-1);
  background-color: var(--color-gray-4);

  :hover {
    cursor: pointer;
    background-color: var(--color-gray-2);
    > span {
      color: var(--color-gray-0);
    }
  }
`;
