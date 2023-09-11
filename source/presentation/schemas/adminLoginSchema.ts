import { object, string } from "yup";

export const adminLoginSchema = object({
  email: string()
    .required("O campo e-mail é obrigatório")
    .email("Digite um e-mail válido"),
  password: string().required("O campo senha é obrigatório"),
});
