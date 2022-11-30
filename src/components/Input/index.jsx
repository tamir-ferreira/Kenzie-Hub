import { StyledInput } from "./styles";

export const Input = ({ label, type, placeholder, register, error }) => {
  return (
    <StyledInput>
      <label className="font-headline">{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
      {/* {console.log({ ...register })} */}
      {/* {console.log(error)} */}
      {error && <p aria-label="erro de validação">{error} </p>}
    </StyledInput>
  );
};
