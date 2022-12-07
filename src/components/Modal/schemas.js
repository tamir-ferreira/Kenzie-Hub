import * as yup from "yup";

export const modalSchema = yup.object().shape({
  title: yup.string().required("* campo obrigatório"),

  status: yup.string().required("* campo obrigatório"),
});
