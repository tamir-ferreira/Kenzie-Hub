import { useContext } from "react";
import { createContext, useState } from "react";
import { createTech, deleteTech, getUsers, updateTech } from "../services/api";
import { UserContext } from "./UserContext";

console.log("techContext");
export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techSelected, setTechSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAdd, setModalAdd] = useState(true);
  const { setUser, setLoading, setLoading2, globalLoading } =
    useContext(UserContext);

  const closeModal = () => {
    setTimeout(async () => {
      const response = await getUsers();
      setUser(response);
      setModalOpen(false);
      setLoading(false);
      setLoading2(false);
    }, 500);
  };

  const createTechSubmit = async (data) => {
    setLoading(true);
    data.title =
      data.title[0].toUpperCase() + data.title.slice(1).toLowerCase();

    const response = await createTech(data);
    response ? closeModal() : setLoading(false);
  };

  const deleteTechSubmit = async (data) => {
    setLoading2(true);
    const response = await deleteTech(data);
    response ? closeModal() : setLoading2(false);
  };

  const updateTechSubmit = async (data) => {
    setLoading(true);
    const tech_id = techSelected.id;
    const body = {
      status: data.status,
    };

    const response = await updateTech(tech_id, body);
    response ? closeModal() : setLoading(false);
  };

  return (
    <TechContext.Provider
      value={{
        techSelected,
        setTechSelected,
        createTechSubmit,
        deleteTechSubmit,
        updateTechSubmit,
        modalOpen,
        setModalOpen,
        modalAdd,
        setModalAdd,
      }}
    >
      {console.log("techComponent")}
      {/* {globalLoading ? <h1>TESTE</h1> : children} */}
      {children}
    </TechContext.Provider>
  );
};
