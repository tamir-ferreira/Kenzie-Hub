import empty from "../../images/empty.png";
import { FaPlus } from "react-icons/fa";
import { Button } from "../../components/Button";
import { StyledDashboard } from "./styles";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { TechContext } from "../../context/TechContext";
import { CardTech } from "../../components/CardTech";
import { AnimBlur } from "../../components/Animation";

export const DashboardPage = () => {
  const { user, setUser, setShowPass } = useContext(UserContext);
  const { modalOpen, setModalOpen, setModalAdd } = useContext(TechContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setShowPass(false);
  };

  return user ? (
    <StyledDashboard>
      <AnimBlur>
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
          <div>
            <h3 className="font-title-2">Tecnologias</h3>
            <Button
              size="plus"
              color="dark_gray"
              onClick={() => {
                setModalAdd(true);
                setModalOpen(true);
              }}
            >
              <FaPlus size={13} />
            </Button>
          </div>
          {user.techs.length > 0 ? (
            <ul>
              <CardTech />
            </ul>
          ) : (
            <div>
              <img src={empty} alt="animação lista vazia" />
              <h5>Você não possui tecnologias cadastradas até o momento.</h5>
            </div>
          )}
        </section>

        {modalOpen && <Modal />}
      </AnimBlur>
    </StyledDashboard>
  ) : (
    <Navigate to="/" />
  );
};
