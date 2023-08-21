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
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";

interface LoginParams {
  email: string;
  password: string;
}

const authUserUsecase = createAuthUserUsecase();

export const LoginForm = (): JSX.Element => {
  const { notify } = useNotify();
  const [showPassword, setShowPassword] = useState(false);
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

  function handleShowPassword(): void {
    setShowPassword((e) => !e);
  }

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
        type={showPassword ? "text" : "password"}
        placeholder="Senha"
        error={errors.password?.message}
        {...register("password")}
      />
      <CheckBox
        label="Mostrar senha"
        onChange={handleShowPassword}
        checked={showPassword}
      />
      <Button disabled={loading} full className="uppercase">
        Autenticar-se
      </Button>
    </form>
  );
};
