import { StyledRegister } from "./styles";

import logo from "../../images/logo.svg";

import { Button } from "../../components/Button";
import { Form } from "../../components/Form";

export const RegisterPage = () => {
  return (
    <StyledRegister>
      <nav>
        <img src={logo} alt="" />
        <Button size="small" color="dark_gray" children="Voltar" />
      </nav>
      <main>
        <Form />
      </main>
    </StyledRegister>
  );
};
