import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../Textinput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { createAuthUserUsecase } from "@/factories/createAuthUserUsecase";
import { loginSchema } from "@/presentation/schemas/loginSchema";
import { useState } from "react";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import { useNotify } from "@/presentation/hooks/useNotify";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";

interface LoginParams {
  email: string;
  password: string;
}

const authUserUsecase = createAuthUserUsecase();

export const LoginForm = (): JSX.Element => {
  const { notify } = useNotify();
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
      notify("Credenciais inválidas", StatusEnum.ERROR);
      setLoading(false);
      return;
    }

    await push(PageRoutesEnum.HOME);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitData)}>
      <TextInput
        label="E-mail"
        type="email"
        placeholder="Email"
        error={errors.email?.message}
        {...register("email")}
      />
      <TextInput
        label="Senha"
        type="password"
        placeholder="Senha"
        error={errors.password?.message}
        {...register("password")}
      />
      <button disabled={loading} className="btn btn-primary uppercase w-full">
        Autenticar-se
      </button>
    </form>
  );
};
