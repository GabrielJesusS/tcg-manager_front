import { object, ref, string } from "yup";

export const registerSchema = object({
    userName: string().required("O campo nome é obrigatório").max(250),
    email: string().required("O campo e-mail é obrigatório").email("Digite um e-mail válido"),
    password: string().required("O campo senha é obrigatório").min(8, "A senha deve possuir no minimo 8 caracteres"),
    confirmPassword: string().oneOf([ref('password'), null], "As senhas não coincidem")
})