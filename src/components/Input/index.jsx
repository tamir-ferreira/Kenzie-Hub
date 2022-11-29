import { StyledInput } from "./styles";

export const Input = ({ label, type, placeholder }) => {
  return (
    <StyledInput>
      <label htmlFor="">{label} </label>
      <input type={type} placeholder={placeholder} />
    </StyledInput>
  );
};
