import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AnimSlideDown } from "../Animation";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { modalSchema } from "./schemas";
import { StyledModal } from "./styles";

export const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(modalSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledModal>
      <div>
        <div>
          <h4 className="font-title-3">Cadastrar Tecnologia</h4>
          <span>X</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui a tecnologia"
            register={register("email")}
            // error={errors.email?.message}
          />
          {/* <select name="" id="">
            <option value="">Selecione aqui seu nível</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select> */}
          <Select
            register={register("course_module")}
            error={errors.course_module?.message}
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
