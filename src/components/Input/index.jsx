import { StyledInput } from "./styles";

export const Input = ({ label, type, placeholder }) => {
  return (
    <StyledInput>
      <label className="font-headline" htmlFor="">
        {label}
      </label>
      <input type={type} placeholder={placeholder} required />
    </StyledInput>
  );
};
