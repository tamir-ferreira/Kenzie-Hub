import React, { useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schemas";
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export const FormLogin = () => {
  const [showPass, setShowPass] = useState(false);
  const { login, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(login)} noValidate>
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
        children={!loading ? "Entrar" : <span class="loader"></span>}
      />
    </StyledForm>
  );
};
