import { yupResolver } from "@hookform/resolvers/yup";
import { Textinput } from "../Textinput";
import { registerSchema } from "@/presentation/schemas/registerSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { createRegisterUserUsecase } from "@/factories/createRegisterUserUsecase";
import { useRouter } from "next/router";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";

interface RegisterParams {
  name: string;
  email: string;
  user_name: string;
  password: string;
  confirmPassword: string;
}

const registerUserUsecase = createRegisterUserUsecase();

export const RegisterForm = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterParams>({
    resolver: yupResolver(registerSchema),
  });

  const { push } = useRouter();

  const submitData: SubmitHandler<RegisterParams> = async (data) => {
    const response = await registerUserUsecase.execute(data);

    if (response.isRight()) {
      push(PageRoutesEnum.HOME);
      return;
    }
  };

  return (
    <form className="space-y-6 max-w-xs" onSubmit={handleSubmit(submitData)}>
      <Textinput
        label="Nome de usuário"
        type="text"
        inputProps={{
          ...register("user_name"),
          placeholder: "Nome de usuário...",
        }}
      />
      {errors.user_name && (
        <span className="text-error">{errors.user_name.message}</span>
      )}

      <Textinput
        label="Nome completo"
        type="text"
        inputProps={{
          ...register("name"),
          placeholder: "Nome completo...",
        }}
      />
      {errors.name && <span className="text-error">{errors.name.message}</span>}
      <Textinput
        label="E-mail"
        type="email"
        inputProps={{ ...register("email"), placeholder: "Email" }}
      />
      {errors.email && (
        <span className="text-error">{errors.email.message}</span>
      )}
      <Textinput
        label="Senha"
        type="password"
        inputProps={{ ...register("password"), placeholder: "Senha" }}
      />
      {errors.password && (
        <span className="text-error">{errors.password.message}</span>
      )}
      <Textinput
        label="Confirmar senha"
        type="password"
        inputProps={{
          ...register("confirmPassword"),
          placeholder: "Confirmar senha",
        }}
      />
      {errors.confirmPassword && (
        <span className="text-error whitespace-break-spaces">
          {errors.confirmPassword.message}
        </span>
      )}
      <button className="btn btn-primary uppercase w-full">Registar-se</button>
    </form>
  );
};
