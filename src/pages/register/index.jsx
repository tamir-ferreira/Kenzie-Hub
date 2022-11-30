import logo from "../../images/logo.svg";
import { StyledRegister } from "./styles";
import { Button } from "../../components/Button";
import { FormRegister } from "../../components/Form/FormRegister";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <StyledRegister>
      <nav>
        <img src={logo} alt="logotipo Kenzie Hub" />
        <Button
          type="button"
          onClick={() => navigate(`/`)}
          size="small"
          color="dark_gray"
          children="Voltar"
        />
      </nav>
      <main>
        <FormRegister />
      </main>
    </StyledRegister>
  );
};
