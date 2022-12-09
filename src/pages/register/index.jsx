import { StyledRegister } from "./styles";
import { FormRegister } from "../../components/Form/FormRegister";
import { AnimSlideDown } from "../../components/Animation";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const RegisterPage = () => {
  const { setShowPass } = useContext(UserContext);
  return (
    <StyledRegister>
      <AnimSlideDown>
        <Header children={"Voltar"} onClick={() => setShowPass(false)} />
        <main>
          <FormRegister />
        </main>
      </AnimSlideDown>
    </StyledRegister>
  );
};
