import { StyledInput } from "./styles";

export const Input = ({
  label,
  type,
  value,
  placeholder,
  children,
  register,
  error,
}) => {
  return (
    <StyledInput>
      <label className="font-headline" htmlFor={register.name}>
        {label}
      </label>
      {children}
      <input
        id={register.name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={error && "error"}
        {...register}
      />
      {error && (
        <p className="font-headline" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledInput>
  );
};
