import { number, object, string } from "yup";

export const deckComposeSchema = object({
  name: string()
    .required("Informe o nome do deck")
    .min(10, "O nome está muito pequeno!")
    .max(250, "O nome está muito grande!"),
  description: string()
    .required("A descrição é obrigatória")
    .min(50, "A descrição está muito pequena!")
    .max(250, "A descrição está muito grande!"),
  difficulty: number()
    .required("Por favor informe a dificuldade")
    .typeError("Informe a dificuldade")
    .oneOf([1, 2, 3, 4, 5], "A dificuldade deve ser informada"),
});
