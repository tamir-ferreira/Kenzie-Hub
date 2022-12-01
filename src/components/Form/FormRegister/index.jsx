import React, { useState } from "react";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { StyledForm } from "../styles";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./schemas";
import { createUser } from "../../../services/api";
import { useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const [anyError, setAnyError] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const submitForm = async (data) => {
    // enviar para API
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    (await createUser(user)) &&
      setTimeout(() => {
        navigate(`/`);
      }, 3500);
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
        placeholder="Crie aqui sua senha"
        register={register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite a senha novamente"
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
        placeholder="(DD) XXXXX-XXXX"
        register={register("contact")}
        error={errors.contact?.message}
      />
      <Select
        register={register("course_module")}
        error={errors.course_module?.message}
      />
      <Button
        type="submit"
        size="default"
        color="colored"
        children="Cadastrar"
      />
    </StyledForm>
  );
};
