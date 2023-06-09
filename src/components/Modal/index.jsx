import { yupResolver } from "@hookform/resolvers/yup";
import { modalSchemaCreate, modalSchemaUpdate } from "./schemas";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";
import { AnimSlideUp } from "../Animation";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { StyledModal } from "./styles";

export const Modal = () => {
  const options = ["Iniciante", "Intermediário", "Avançado"];
  const { loading, loading2 } = useContext(UserContext);
  const {
    techSelected,
    createTechSubmit,
    deleteTechSubmit,
    updateTechSubmit,
    setModalOpen,
    modalAdd,
  } = useContext(TechContext);
  const { id, title, status } = techSelected;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(modalAdd ? modalSchemaCreate : modalSchemaUpdate),
  });

  return (
    <StyledModal>
      <AnimSlideUp>
        <div>
          <h4 className="font-title-3">
            {modalAdd ? "Cadastrar Tecnologia" : "Editar Tecnologia"}
          </h4>
          <Button onClick={() => setModalOpen(false)}>X</Button>
        </div>
        <form
          onSubmit={handleSubmit(
            modalAdd ? createTechSubmit : updateTechSubmit
          )}
        >
          <Input
            label={modalAdd ? "Nome" : "Nome cadastrado"}
            type="text"
            disabled={modalAdd ? false : true}
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
          {modalAdd ? (
            <Button
              type="submit"
              size="default"
              color={!loading ? "colored" : "disabled"}
              children={
                !loading ? (
                  "Cadastrar Tecnologia"
                ) : (
                  <span className="loader"></span>
                )
              }
            />
          ) : (
            <div>
              <Button
                type="submit"
                size="fixed_default"
                color={!loading ? "colored" : "disabled"}
                children={
                  !loading ? (
                    "Salvar alterações"
                  ) : (
                    <span className="loader"></span>
                  )
                }
              />
              <Button
                type="button"
                size="fixed_little"
                color={!loading2 ? "gray" : "disabled_gray"}
                children={
                  !loading2 ? "Excluir" : <span className="loader"></span>
                }
                onClick={() => deleteTechSubmit(id)}
              />
            </div>
          )}
        </form>
      </AnimSlideUp>
    </StyledModal>
  );
};
