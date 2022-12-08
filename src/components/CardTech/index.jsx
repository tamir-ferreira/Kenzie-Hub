import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";
import { StyledCardTech } from "./styles";

export const CardTech = () => {
  const { user } = useContext(UserContext);
  const { setTechSelected, setModalAdd, setModalOpen } =
    useContext(TechContext);
  return (
    <>
      {user.techs.map((tech) => (
        <StyledCardTech
          key={tech.id}
          onClick={() => {
            setTechSelected(tech);
            setModalAdd(false);
            setModalOpen(true);
          }}
        >
          <h4 className="font-title-3">{tech.title}</h4>
          <span className="font-headline-gray">{tech.status}</span>
        </StyledCardTech>
      ))}
    </>
  );
};
