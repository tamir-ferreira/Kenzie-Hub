import React from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schemas";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitForm = (data) => {
    // enviar para API
    console.log(data);
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
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        error={errors.password?.message}
      />

      <Button type="submit" size="default" color="colored" children="Entrar" />
    </StyledForm>
  );
};
