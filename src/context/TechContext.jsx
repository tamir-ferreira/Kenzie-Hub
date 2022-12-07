import { useContext } from "react";
import { createContext, useState } from "react";
import { createTech, getUsers } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { setUser } = useContext(UserContext);

  const createTechSubmit = async (data) => {
    const response = await createTech(data);

    if (response) {
      const response = await getUsers();
      setUser(response);
      setModalOpen(false);
    }
  };

  const deleteTechSubmit = async (data) => {
    const response = await deleteTech(data);

    response &&
      setTimeout(() => {
        setModalOpen(false);
      }, 500);
  };

  return (
    <TechContext.Provider value={{ createTechSubmit, modalOpen, setModalOpen }}>
      {children}
    </TechContext.Provider>
  );
};
