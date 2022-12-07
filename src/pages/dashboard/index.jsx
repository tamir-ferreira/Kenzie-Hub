// import construction2 from "../../images/construction2.png";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "../../components/Button";
import { StyledDashboard } from "./styles";
// import { AnimBlur } from "../../components/Animation";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/Modal";

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
        <div>
          <h3 className="font-title-2">Tecnologias</h3>
          <Button size="plus" color="dark_gray" onClick={() => M}>
            <FaPlus size={13} />
          </Button>
        </div>
        <ul>
          <li>
            <h4 className="font-title-3">React JS</h4>
            <div>
              <span className="font-headline-gray">Intermediário</span>
              <span>
                <FaTrashAlt size={13} />
              </span>
            </div>
          </li>
          <li>
            <h4 className="font-title-3">React JS</h4>
            <div>
              <span className="font-headline-gray">Intermediário</span>
              <span>
                <FaTrashAlt size={13} />
              </span>
            </div>
          </li>
          <li>
            <h4 className="font-title-3">React JS</h4>
            <div>
              <span className="font-headline-gray">Intermediário</span>
              <span>
                <FaTrashAlt size={13} />
              </span>
            </div>
          </li>
          <li>
            <h4 className="font-title-3">React JS</h4>
            <div>
              <span className="font-headline-gray">Intermediário</span>
              <span>
                <FaTrashAlt size={13} />
              </span>
            </div>
          </li>
          <li>
            <h4 className="font-title-3">React JS</h4>
            <div>
              <span className="font-headline-gray">Intermediário</span>
              <span>
                <FaTrashAlt size={13} />
              </span>
            </div>
          </li>
        </ul>
      </section>
      <Modal />
    </StyledDashboard>
  ) : (
    <Navigate to="/" />
  );
};
