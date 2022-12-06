import construction2 from "../../images/construction2.png";
import { Button } from "../../components/Button";
import { StyledDashboard } from "./styles";
import { AnimBlur } from "../../components/Animation";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export const DashboardPage = () => {
  const { user, setUser, waitUser } = useContext(UserContext);

  if (waitUser) {
    return null;
  }

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return user ? (
    <StyledDashboard>
      <Header
        className="container"
        onClick={() => handleLogout()}
        children="Sair"
      />
      <section>
        <div className="container">
          <h2 className="font-title-1">Olá, {user.name}</h2>
          <p className="font-headline-gray">{user.course_module}</p>
        </div>
      </section>
      <section className="container">
        <h3 className="font-title-2">
          Que pena! Estamos em desenvolvimento :(
        </h3>
        <h4 className="font-title-2-regular">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades...
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
  ) : (
    <Navigate to="/" />
  );
};
