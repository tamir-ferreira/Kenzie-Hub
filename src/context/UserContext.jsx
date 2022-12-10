import { createContext, useEffect, useState } from "react";
import { api, createUser, getUsers, loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [waitUser, setWaitUser] = useState(true);
  const [showPass, setShowPass] = useState(false);
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
      }, 2000);
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
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        loading2,
        waitUser,
        showPass,
        setUser,
        loginSubmit,
        registerSubmit,
        setLoading,
        setLoading2,
        setShowPass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
