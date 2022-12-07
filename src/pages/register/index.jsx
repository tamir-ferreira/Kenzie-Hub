import { StyledRegister } from "./styles";
import { FormRegister } from "../../components/Form/FormRegister";
import { AnimSlideDown } from "../../components/Animation";
import { Header } from "../../components/Header";

export const RegisterPage = () => {
  return (
    <StyledRegister>
      <AnimSlideDown>
        <Header children={"Voltar"} />
        <main>
          <FormRegister />
        </main>
      </AnimSlideDown>
    </StyledRegister>
  );
};
