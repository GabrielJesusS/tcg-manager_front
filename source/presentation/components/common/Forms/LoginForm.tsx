import { yupResolver } from "@hookform/resolvers/yup";
import { Textinput } from "../Textinput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { createAuthUserUsecase } from "@/factories/createAuthUserUsecase";
import { loginSchema } from "@/presentation/schemas/loginSchema";
import { useState } from "react";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";

interface LoginParams {
  email: string;
  password: string;
}

const authUserUsecase = createAuthUserUsecase();

export const LoginForm = (): JSX.Element => {
  const { push } = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginParams>({
    resolver: yupResolver(loginSchema),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const submitData: SubmitHandler<LoginParams> = async (data) => {
    setLoading(true);
    const response = await authUserUsecase.execute(data);

    if (response.isLeft()) {
      setLoading(false);
      return;
    }

    await push(PageRoutesEnum.HOME);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitData)}>
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

      <button disabled={loading} className="btn btn-primary uppercase w-full">
        Autenticar-se
      </button>
    </form>
  );
};
