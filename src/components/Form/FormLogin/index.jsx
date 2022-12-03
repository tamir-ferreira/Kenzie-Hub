import React, { useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schemas";
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { loginUser } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export const FormLogin = ({ setUser }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const submitForm = async (data) => {
    const response = await loginUser(data, setLoading);
    if (response) {
      setUser(response.user);
      localStorage.setItem("@TOKEN", response.token);
      localStorage.setItem("@USERID", response.user.id);

      setTimeout(() => {
        navigate("home");
      }, 3000);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)} noValidate>
      <div>
        <h2 className="font-title-1">Login</h2>
      </div>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        type={showPass ? "text" : "password"}
        placeholder="Digite aqui sua senha"
        register={register("password")}
        error={errors.password?.message}
        children={
          showPass ? (
            <BsEyeSlash onClick={() => setShowPass(!showPass)} />
          ) : (
            <BsFillEyeFill onClick={() => setShowPass(!showPass)} />
          )
        }
      />

      <Button
        type="submit"
        size="default"
        color={!loading ? "colored" : "disabled"}
        children={!loading ? "Entrar" : "aguarde um momento..."}
      />
    </StyledForm>
  );
};
