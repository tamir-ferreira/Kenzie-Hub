import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("* campo obrigatório"),

  password: yup.string().required("* campo obrigatório"),
});
