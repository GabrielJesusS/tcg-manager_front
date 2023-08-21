import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput } from "../Textinput";
import { registerSchema } from "@/presentation/schemas/registerSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { createRegisterUserUsecase } from "@/factories/createRegisterUserUsecase";
import { useRouter } from "next/router";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import { useNotify } from "@/presentation/hooks/useNotify";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { useState } from "react";
import { CheckBox } from "../CheckBox";
import { Button } from "../Button";

interface RegisterParams {
  name: string;
  email: string;
  user_name: string;
  password: string;
  confirmPassword: string;
}

const registerUserUsecase = createRegisterUserUsecase();

export const RegisterForm = (): JSX.Element => {
  const { notify } = useNotify();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterParams>({
    resolver: yupResolver(registerSchema),
  });

  function handleShowPassword(): void {
    setShowPassword((e) => !e);
  }

  const { push } = useRouter();

  const submitData: SubmitHandler<RegisterParams> = async (data) => {
    const response = await registerUserUsecase.execute(data);

    if (response.isLeft()) {
      notify("Dados inválidos", StatusEnum.ERROR);
      return;
    }

    void push(PageRoutesEnum.HOME);
  };

  return (
    <form className="space-y-6 max-w-xs" onSubmit={handleSubmit(submitData)}>
      <TextInput
        label="Nome de usuário"
        type="text"
        placeholder={"Nome de usuário..."}
        error={errors.user_name?.message}
        {...register("user_name")}
      />

      <TextInput
        label="Nome completo"
        type="text"
        {...register("name")}
        placeholder={"Nome completo..."}
        error={errors.name?.message}
      />

      <TextInput
        label="E-mail"
        type="email"
        {...register("email")}
        placeholder={"Email"}
        error={errors.email?.message}
      />

      <TextInput
        label="Senha"
        type={showPassword ? "text" : "password"}
        {...register("password")}
        placeholder={"Senha"}
        error={errors.password?.message}
      />

      <TextInput
        label="Confirmar senha"
        type={showPassword ? "text" : "password"}
        {...register("confirmPassword")}
        placeholder={"Confirmar senha"}
        error={errors.confirmPassword?.message}
      />
      <CheckBox
        label="Mostrar senha"
        onChange={handleShowPassword}
        checked={showPassword}
      />

      <Button className="uppercase" full>
        Registar-se
      </Button>
    </form>
  );
};
