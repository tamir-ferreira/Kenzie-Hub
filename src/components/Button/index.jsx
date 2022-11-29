import { StyledButton } from "../../styles/buttons";

export const Button = ({ size, color, children }) => {
  return (
    <>
      <StyledButton size={size} color={color}>
        {children}
      </StyledButton>
    </>
  );
};
