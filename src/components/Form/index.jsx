import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledForm } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { FaPlus } from "react-icons/fa";

export const Form = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("campo obrigatório")
      .min(3, "mínimo de 3 caracteres")
      .max(200, "máximo de 200 caracteres"),

    email: yup
      .string()
      .required("campo obrigatório")
      .email("necessário fornecer um e-mail válido"),

    password: yup
      .string()
      .required("campo obrigatório")
      .min(8, "mínimo de 8 caracteres")
      .matches(/(?=.*?[A-Z])/, "necessário pelo menos 1 letra maiúscula")
      .matches(/(?=.*?[a-z])/, "necessário pelo menos 1 letra minúscula")
      .matches(/(?=.*?[0-9])/, "necessário pelo menos 1 número")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "necessário pelo menos 1 caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .required("campo obrigatório")
      .min(8, "mínimo de 8 caracteres")
      .matches(/(?=.*?[A-Z])/, "necessário pelo menos 1 letra maiúscula")
      .matches(/(?=.*?[a-z])/, "necessário pelo menos 1 letra minúscula")
      .matches(/(?=.*?[0-9])/, "necessário pelo menos 1 número")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "necessário pelo menos 1 caracter especial"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data) => {
    // enviar para API
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)} noValidate>
      {/* <Button size="plus" color="dark_gray">
        <FaPlus size={13} />
      </Button> */}
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
      <label className="font-headline" htmlFor="">
        Selecionar módulo
      </label>
      <Select />
      <Button
        type="submit"
        size="default"
        color="colored"
        children="Cadastrar"
      />
    </StyledForm>
  );
};
