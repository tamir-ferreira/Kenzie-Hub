import { StyledSelect } from "./styled";

export const Select = ({ register, error }) => {
  /* const selected = (event) => {
    console.log("ók");
    event.target.value
      ? event.target.classList.add("selected")
      : event.target.classList.remove("selected");
  }; */
  /* const selected = (event) => (!event.target.value ? true : false);
  console.log(selected); */

  return (
    <StyledSelect>
      <label className="font-headline" htmlFor={register.name}>
        Selecionar módulo
      </label>
      <select id={register.name} className={error && "error"} {...register}>
        <option value="">Selecione aqui o Módulo</option>
        <option value="Módulo 1">Primeiro Módulo</option>
        <option value="Módulo 2">Segundo Módulo</option>
        <option value="Módulo 3">Terceiro Módulo</option>
        <option value="Módulo 4">Quarto Módulo</option>
        <option value="Módulo 5">Quinto Módulo</option>
        <option value="Módulo 6">Sexto Módulo</option>
      </select>
      {error && (
        <p className="font-headline" aria-label="erro na validação do campo">
          {error}
        </p>
      )}
    </StyledSelect>
  );
};
