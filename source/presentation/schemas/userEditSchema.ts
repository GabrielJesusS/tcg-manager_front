import { object, string } from "yup";

export const userEditSchema = object({
    user_name: string().required("O campo nome é obrigatório").max(250),
    name: string().required("O campo nome de usuário é obrigatório").max(250),
    email: string().required("O campo e-mail é obrigatório").email("Digite um e-mail válido"),
    password: string().notRequired().min(8, "A senha deve possuir no minimo 8 caracteres"),
})