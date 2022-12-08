import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, createUser, getUsers, loginUser } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [waitUser, setWaitUser] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      if (!token) {
        setWaitUser(false);
        return;
      }

      const response = await getUsers(token);
      if (response !== null) {
        setUser(response);
        navigate("/dashboard");
      } else localStorage.clear();

      setWaitUser(false);
    };

    loadUser();
  }, []);

  if (waitUser) {
    return null;
  }

  const loginSubmit = async (data) => {
    setLoading(true);
    const response = await loginUser(data);
    const { user: userResponse, token } = response;

    if (response) {
      setUser(userResponse);
      localStorage.setItem("@USERID", userResponse.id);
      localStorage.setItem("@TOKEN", token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard");
      }, 2500);
    } else {
      setLoading(false);
    }
  };

  const registerSubmit = async (data) => {
    setLoading(true);
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    const response = await createUser(user);

    if (response) {
      setTimeout(() => {
        setLoading(false);
        navigate(`/`);
      }, 3000);
    } else {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loginSubmit,
        registerSubmit,
        loading,
        loading2,
        setLoading,
        setLoading2,
        user,
        setUser,
        waitUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
