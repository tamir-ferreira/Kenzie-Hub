import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { StyledForm } from "./styles";

// import { FaPlus } from "react-icons/fa";

export const Form = () => {
  return (
    <StyledForm>
      {/* <Button size="plus" color="dark_gray">
        <FaPlus size={13} />
      </Button> */}
      <div>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
      </div>
      <Input label="Nome" type="text" placeholder="Digite aqui seu nome" />
      <Input label="Email" type="email" placeholder="Digite aqui seu email" />
      <Button size={"default"} color={"colored"} children={"teste"} />
    </StyledForm>
  );
};
