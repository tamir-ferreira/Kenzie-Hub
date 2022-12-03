import logo from "../../images/logo.svg";
import { StyledLogin } from "./styles";
import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/Form/FormLogin";
import { Button } from "../../components/Button";

export const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();

  return (
    <StyledLogin>
      <nav>
        <img src={logo} alt="logotipo Kenzie Hub" />
      </nav>
      <main>
        <FormLogin setUser={setUser} />
        <p className="font-headline-gray">Ainda não possui uma conta?</p>
        <Button
          type="button"
          onClick={() => navigate("/register")}
          size="default"
          color="gray"
          children="Cadastre-se"
        />
      </main>
    </StyledLogin>
  );
};
