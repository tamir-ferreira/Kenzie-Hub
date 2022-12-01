import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export const createUser = async (user) => {
  try {
    const response = await api.post("/users", user);

    response.status === 201 &&
      toast.success("Sucesso!! Redirecionando...", {
        style: {
          color: "var(--color-success)",
        },
      });
    return true;
  } catch (error) {
    console.error(error.response.data.message);
    const message = error.response.data.message;

    message === "Email already exists" &&
      toast.error("Email já está em uso", {
        style: {
          color: "var(--color-negative)",
        },
      });
    return false;
  }
};
