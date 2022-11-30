import { StyledInput } from "./styles";

export const Input = ({ label, type, placeholder, register, error }) => {
  // console.log(register);
  return (
    <StyledInput>
      <label className="font-headline" htmlFor={register.name}>
        {label}
      </label>
      <input
        id={register.name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <p className="font-headline" aria-label="erro na validação do campo">
          {error}{" "}
        </p>
      )}
    </StyledInput>
  );
};
