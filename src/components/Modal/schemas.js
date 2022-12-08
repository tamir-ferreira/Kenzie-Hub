import * as yup from "yup";

export const modalSchemaCreate = yup.object().shape({
  title: yup.string().required("* campo obrigatório"),

  status: yup.string().required("* campo obrigatório"),
});

export const modalSchemaUpdate = yup.object().shape({
  status: yup.string().required("* campo obrigatório"),
});
