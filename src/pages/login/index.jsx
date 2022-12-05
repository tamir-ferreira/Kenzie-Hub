import logo from "../../images/logo.svg";
import { StyledLogin } from "./styles";
import { Link } from "react-router-dom";
import { FormLogin } from "../../components/Form/FormLogin";
import { Button } from "../../components/Button";
import { AnimSlideRight, AnimZoom } from "../../components/Animation";

export const LoginPage = ({ setUser }) => {
  return (
    <StyledLogin>
      <div>
        <AnimSlideRight delay={0}>
          <nav>
            <img src={logo} alt="logotipo Kenzie Hub" />
          </nav>
        </AnimSlideRight>
        <AnimZoom>
          <main>
            <FormLogin setUser={setUser} />
            <p className="font-headline-gray">Ainda não possui uma conta?</p>
            <Link to={"/register"}>
              <Button size="default" color="gray" children="Cadastre-se" />
            </Link>
          </main>
        </AnimZoom>
      </div>
    </StyledLogin>
  );
};
