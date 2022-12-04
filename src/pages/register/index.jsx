import { StyledRegister } from "./styles";
import { FormRegister } from "../../components/Form/FormRegister";
import { AnimSlideDown } from "../../components/Animation";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <StyledRegister>
      <AnimSlideDown>
        <Header
          onClick={() => {
            navigate(`/`);
          }}
          children="Voltar"
        />
        <main>
          <FormRegister />
        </main>
      </AnimSlideDown>
    </StyledRegister>
  );
};
