import { StyledSelect } from "./styled";

export const Select = ({ register, error }) => {
  return (
    <StyledSelect>
      <label className="font-headline" htmlFor={register.name}>
        Selecionar módulo
      </label>
      <select id={register.name} className={error && "error"} {...register}>
        <option value="">Selecione aqui o Módulo</option>
        <option value="Primeiro Módulo">Primeiro Módulo</option>
        <option value="Segundo Módulo">Segundo Módulo</option>
        <option value="Terceiro Módulo">Terceiro Módulo</option>
        <option value="Quarto Módulo">Quarto Módulo</option>
        <option value="Quinto Módulo">Quinto Módulo</option>
        <option value="Sexto Módulo">Sexto Módulo</option>
      </select>
      {error && (
        <p className="font-headline" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledSelect>
  );
};
