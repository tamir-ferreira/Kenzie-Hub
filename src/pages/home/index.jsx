import logo from "../../images/logo.svg";
import construction from "../../images/construction.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { StyledHome } from "./styles";
import { AnimBlur } from "../../components/Animation";
import { FaPlus } from "react-icons/fa";

export const HomePage = ({ user, setUser }) => {
  //   console.log(user);
  const { name, course_module } = user;
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate(`/`);
  };

  return (
    <StyledHome>
      <header>
        <nav className="container">
          <img src={logo} alt="logotipo Kenzie Hub" />
          <Button
            type="button"
            onClick={() => handleLogout()}
            size="small"
            color="dark_gray"
            children="Sair"
          />
        </nav>
      </header>
      <section>
        <div className="container">
          <h2 className="font-title-1">Olá, {name}</h2>
          <p className="font-headline-gray">{course_module}</p>
        </div>
      </section>
      <section className="container">
        <div>
          <h3 className="font-title-2">Tecnologias</h3>
          <Button size="plus" color="dark_gray">
            <FaPlus size={13} />
          </Button>
        </div>
        <div>
          <AnimBlur>
            <img src={construction} alt="página em construção" />
          </AnimBlur>
        </div>
      </section>
    </StyledHome>
  );
};
