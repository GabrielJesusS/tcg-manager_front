import { object, ref, string } from "yup";

export const registerSchema = object({
    userName: string().required().max(250),
    email: string().required().email(),
    password: string().required().min(8),
    confirmPassword: string().required().oneOf([ref('password'), null],)
})