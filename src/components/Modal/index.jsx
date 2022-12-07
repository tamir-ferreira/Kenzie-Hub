import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../context/TechContext";
import { createTech } from "../../services/api";
import { AnimSlideDown } from "../Animation";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { options } from "./data";
import { modalSchema } from "./schemas";
import { StyledModal } from "./styles";

export const Modal = () => {
  const { createTechSubmit, setModalOpen } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(modalSchema),
  });

  return (
    <StyledModal>
      <div>
        <div>
          <h4 className="font-title-3">Cadastrar Tecnologia</h4>
          <Button onClick={() => setModalOpen(false)}>X</Button>
        </div>
        <form onSubmit={handleSubmit(createTechSubmit)} noValidate>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui a tecnologia"
            register={register("title")}
            error={errors.title?.message}
          />
          <Select
            options={options}
            register={register("status")}
            label={"Selecionar Nível"}
            error={errors.status?.message}
          />
          {/* <AnimSlideDown delay={1.5}> */}
          <Button
            type="submit"
            size="default"
            color="colored"
            children="Cadastrar Tecnologia"
          />
          {/* </AnimSlideDown> */}
        </form>
      </div>
    </StyledModal>
  );
};
