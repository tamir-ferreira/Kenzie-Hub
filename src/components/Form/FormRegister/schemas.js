import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("* campo obrigatório")
    .min(3, "* mínimo de 3 caracteres")
    .max(200, "* máximo de 100 caracteres"),

  email: yup
    .string()
    .required("* campo obrigatório")
    .email("* endereço de e-mail inválido"),

  password: yup
    .string()
    .required("* campo obrigatório")
    .min(8, "* mínimo de 8 caracteres")
    .matches(/(?=.*?[a-z])/, "* necessário pelo menos 1 letra minúscula")
    .matches(/(?=.*?[0-9])/, "* necessário pelo menos 1 número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "* necessário pelo menos 1 caracter especial"
    ),

  passwordConfirm: yup
    .string()
    .required("* campo obrigatório")
    .min(8, "* mínimo de 8 caracteres")
    .matches(/(?=.*?[a-z])/, "* necessário pelo menos 1 letra minúscula")
    .matches(/(?=.*?[0-9])/, "* necessário pelo menos 1 número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "* necessário pelo menos 1 caracter especial"
    )
    .oneOf(
      [yup.ref("password"), null],
      "* necessário que as senhas sejam iguais"
    ),

  bio: yup.string().required("* campo obrigatório"),

  contact: yup.string().required("* campo obrigatório"),

  course_module: yup.string().required("* campo obrigatório"),
});
