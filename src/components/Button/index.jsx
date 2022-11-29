import { StyledButton } from "./styles";

export const Button = ({ size, color, children }) => {
  return (
    <StyledButton size={size} color={color}>
      {children}
    </StyledButton>
  );
};
