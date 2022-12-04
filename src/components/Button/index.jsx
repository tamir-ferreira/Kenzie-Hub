import { StyledButton } from "./styles";

export const Button = ({ size, color, children, onClick, className }) => {
  return (
    <StyledButton
      onClick={onClick}
      size={size}
      color={color}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
