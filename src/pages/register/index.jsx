import logo from "../../images/logo.svg";
import { StyledRegister } from "./styles";
import { FormRegister } from "../../components/Form/FormRegister";
import { AnimSlideDown } from "../../components/Animation";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <StyledRegister>
      <AnimSlideDown>
        <header>
          <nav>
            <img src={logo} alt="logotipo Kenzie Hub" />
            <Button
              type="button"
              onClick={() => {
                navigate(`/`);
              }}
              size="small"
              color="dark_gray"
              children="Voltar"
            />
          </nav>
        </header>
        <main>
          <FormRegister />
        </main>
      </AnimSlideDown>
    </StyledRegister>
  );
};
