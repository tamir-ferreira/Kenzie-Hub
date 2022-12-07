import * as yup from "yup";

export const modalSchema = yup.object().shape({
  name: yup.string().required("* campo obrigatório"),

  status: yup.string().required("* campo obrigatório"),
});
