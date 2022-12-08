import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Button } from "../../components/Button";
import { StyledDashboard } from "./styles";
// import { AnimBlur } from "../../components/Animation";
import { Header } from "../../components/Header";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { TechContext } from "../../context/TechContext";

export const DashboardPage = () => {
  const [techSelected, setTecSelected] = useState("");
  // let techSelected = "";
  const { user, setUser, waitUser } = useContext(UserContext);
  const { modalOpen, setModalOpen, setModalAdd, deleteTechSubmit } =
    useContext(TechContext);

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
        <ul>
          {user.techs.map((tech) => (
            <li
              key={tech.id}
              onClick={() => {
                setTecSelected(tech);
                setModalAdd(false);
                setModalOpen(true);
                // editTechSubmit(tech.id);
              }}
            >
              <h4 className="font-title-3">{tech.title}</h4>
              {/* <div> */}
              <span className="font-headline-gray">{tech.status}</span>
              {/* <button onClick={() => deleteTechSubmit(tech.id)}>
                  <FaTrashAlt size={13} />
                </button> */}
              {/* </div> */}
            </li>
          ))}
        </ul>
      </section>

      {modalOpen && <Modal techSelected={techSelected} />}
    </StyledDashboard>
  ) : (
    <Navigate to="/" />
  );
};
