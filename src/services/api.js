import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export const createUser = async (user) => {
  try {
    const { status } = await api.post("/users", user);

    status === 201 &&
      toast.success("Cadastrado com Sucesso!! Redirecionando...", {
        style: {
          color: "var(--color-success)",
        },
      });

    return true;
  } catch (error) {
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

export const loginUser = async (user) => {
  try {
    const { data, status } = await api.post("/sessions", user);

    status === 200 &&
      toast.success("Logado com Sucesso!! Aguarde...", {
        style: {
          color: "var(--color-success)",
        },
      });

    return data;
  } catch (error) {
    const message = error.response.data.message;

    message[0] === "invalid email" &&
      toast.error("Email inválido!", {
        style: {
          color: "var(--color-negative)",
        },
      });

    message === "Incorrect email / password combination" &&
      toast.error("Email / Senha inválidos!", {
        style: {
          color: "var(--color-negative)",
        },
      });

    return false;
  }
};

export const getUsers = async (token) => {
  try {
    const { data } = await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};
