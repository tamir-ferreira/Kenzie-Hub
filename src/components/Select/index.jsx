import { StyledSelect } from "./styled";

export const Select = ({
  register,
  defaultValue = "",
  error,
  label,
  options,
}) => {
  return (
    <StyledSelect>
      <label className="font-headline" htmlFor={register.name}>
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        id={register.name}
        className={error && "error"}
        {...register}
      >
        <option value="" disabled hidden>
          Selecione aqui seu nível
        </option>
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      {error && (
        <p className="font-headline" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledSelect>
  );
};
