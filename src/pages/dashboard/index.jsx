import construction2 from "../../images/construction2.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { StyledDashboard } from "./styles";
import { AnimBlur } from "../../components/Animation";
import { Header } from "../../components/Header";

export const DashboardPage = ({ user, setUser }) => {
  const { name, course_module } = user;
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate(`/`);
  };

  return (
    <StyledDashboard>
      <Header
        className="container"
        onClick={() => handleLogout()}
        children="Sair"
      />
      <section>
        <div className="container">
          <h2 className="font-title-1">Olá, {name}</h2>
          <p className="font-headline-gray">{course_module}</p>
        </div>
      </section>
      <section className="container">
        <h3 className="font-title-2">
          Que pena! Estamos em desenvolcimento :(
        </h3>
        <h4 className="font-title-2-regular">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h4>
        <div>
          <AnimBlur>
            <Button
              size="image"
              onClick={(event) => (event.target.className = "beat")}
            >
              <img src={construction2} alt="página em construção" />
            </Button>
          </AnimBlur>
        </div>
      </section>
    </StyledDashboard>
  );
};
