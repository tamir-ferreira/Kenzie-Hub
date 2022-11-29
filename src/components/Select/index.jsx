import { StyledSelect } from "./styled";

export const Select = () => {
  const selected = (event) => {
    event.target.value
      ? event.target.classList.add("selected")
      : event.target.classList.remove("selected");
  };
  //   const selected = (event) => (!event.target.value ? true : false);

  return (
    <StyledSelect onChange={(event) => selected(event)} required>
      <option value="">Selecionar Módulo</option>
      <option value="m1">Primeiro Módulo</option>
      <option value="m2">Segundo Módulo</option>
      <option value="m3">Terceiro Módulo</option>
      <option value="m4">Quarto Módulo</option>
      <option value="m5">Quinto Módulo</option>
      <option value="m6">Sexto Módulo</option>
    </StyledSelect>
  );
};
