import { useContext } from "react";
import { createContext, useState } from "react";
import { createTech, deleteTech, getUsers, updateTech } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(true);
  const { setUser } = useContext(UserContext);

  const createTechSubmit = async (data) => {
    const response = await createTech(data);

    response &&
      setTimeout(async () => {
        const response = await getUsers();
        setUser(response);
        setModalOpen(false);
      }, 500);
  };

  const deleteTechSubmit = async (tech_id) => {
    const response = await deleteTech(tech_id);
    response &&
      setTimeout(async () => {
        const response = await getUsers();
        setUser(response);
        setModalOpen(false);
      }, 500);
  };

  const updateTechSubmit = async (tech_id) => {
    console.log(tech_id);

    const response = await updateTech(tech_id);
  };

  return (
    <TechContext.Provider
      value={{
        createTechSubmit,
        deleteTechSubmit,
        updateTechSubmit,
        modalOpen,
        setModalOpen,
        modalAdd,
        setModalAdd,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
