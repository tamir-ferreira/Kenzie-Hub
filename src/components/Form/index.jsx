import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledForm } from "./styles";

// import { FaPlus } from "react-icons/fa";

export const Form = () => {
  return (
    <StyledForm>
      {/* <Button size="plus" color="dark_gray">
        <FaPlus size={13} />
      </Button> */}
      <div>
        <h2 className="font-title-1">Crie sua conta</h2>
        <p className="font-headline-gray">Rápido e grátis, vamos nessa</p>
      </div>
      <Input label="Nome" type="text" placeholder="Digite aqui seu nome" />
      <Input label="Email" type="email" placeholder="Digite aqui seu email" />
      <Input
        label="Senha"
        type="password"
        placeholder="Digite aqui sua senha"
      />
      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite novamente sua senha"
      />
      <Input label="Bio" type="text" placeholder="Fale sobre você" />
      <Input label="Contato" type="text" placeholder="Opção de Contato" />
      <label className="font-headline" htmlFor="">
        Selecionar módulo
      </label>
      <Select />
      <Button size="default" color="disabled" children="Cadastrar" />
    </StyledForm>
  );
};
