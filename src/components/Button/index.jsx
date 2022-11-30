import { StyledButton } from "./styles";

export const Button = ({ size, color, children, onClick }) => {
  return (
    <StyledButton onClick={onClick} size={size} color={color}>
      {children}
    </StyledButton>
  );
};
