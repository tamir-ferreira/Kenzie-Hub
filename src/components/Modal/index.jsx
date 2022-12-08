import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../context/TechContext";
import { AnimSlideDown } from "../Animation";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { options } from "./data";
import { modalSchema } from "./schemas";
import { StyledModal } from "./styles";

export const Modal = ({ techSelected }) => {
  const { id, title, status } = techSelected;
  const {
    createTechSubmit,
    deleteTechSubmit,
    editTechSubmit,
    setModalOpen,
    modalAdd,
  } = useContext(TechContext);

  // console.log(techSelected);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // mode: "onChange",
    resolver: yupResolver(modalSchema),
  });

  return (
    <StyledModal>
      <div>
        <div>
          <h4 className="font-title-3">
            {modalAdd ? "Cadastrar Tecnologia" : "Editar Tecnologia"}
          </h4>
          <Button onClick={() => setModalOpen(false)}>X</Button>
        </div>
        <form
          onSubmit={handleSubmit(modalAdd ? createTechSubmit : editTechSubmit)}
          noValidate
        >
          <Input
            label={modalAdd ? "Nome" : "Nome cadastrado"}
            type="text"
            value={modalAdd ? undefined : title}
            placeholder="Digite aqui a tecnologia"
            register={register("title")}
            error={errors.title?.message}
          />
          <Select
            defaultValue={modalAdd ? "" : status}
            options={options}
            register={register("status")}
            label={modalAdd ? "Selecionar Nível" : "Nível cadastrado"}
            error={errors.status?.message}
          />
          {/* <AnimSlideDown delay={1.5}> */}
          {modalAdd ? (
            <Button
              type="submit"
              size="default"
              color="colored"
              children="Cadastrar Tecnologia"
            />
          ) : (
            <div>
              <Button
                type="submit"
                size="default"
                color="colored"
                children="Salvar alterações"
              />
              <Button
                type="button"
                size="default"
                color="gray"
                children="Excluir"
                onClick={() => deleteTechSubmit(id)}
              />
            </div>
          )}

          {/* </AnimSlideDown> */}
        </form>
      </div>
    </StyledModal>
  );
};
