import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schemas";

export const Form = () => {
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
        <h2 className="font-title-1">Crie sua conta</h2>
        <p className="font-headline-gray">Rápido e grátis, vamos nessa</p>
      </div>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        error={errors.name?.message}
      />
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
      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite novamente sua senha"
        register={register("passwordConfirm")}
        error={errors.passwordConfirm?.message}
      />
      <Input
        label="Bio"
        type="text"
        placeholder="Fale sobre você"
        register={register("bio")}
        error={errors.bio?.message}
      />
      <Input
        label="Contato"
        type="text"
        placeholder="Opção de Contato"
        register={register("contact")}
        error={errors.contact?.message}
      />
      <Select register={register("module")} error={errors.module?.message} />
      <Button
        type="submit"
        size="default"
        color="colored"
        children="Cadastrar"
      />
    </StyledForm>
  );
};
