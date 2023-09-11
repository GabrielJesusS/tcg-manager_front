import { Button } from "@/presentation/components/common/Button";
import { TextInput } from "@/presentation/components/common/Textinput";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { useNotify } from "@/presentation/hooks/useNotify";
import { adminLoginSchema } from "@/presentation/schemas/adminLoginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IAdminLoginFormParams {
  email: string;
  password: string;
}

export const AdminLoginForm = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<IAdminLoginFormParams>({
    resolver: yupResolver(adminLoginSchema),
  });
  const { notify } = useNotify();

  useEffect(() => {
    if (!Object.values(errors).length) return;

    Object.values(errors).forEach((e) => {
      notify(e.message as string, StatusEnum.ERROR);
    });

    clearErrors();
  }, [errors]);

  function handleFormSubmit(data: IAdminLoginFormParams): void {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-safe">
      <div className="text-system-100 space-y-4">
        <TextInput
          {...register("email")}
          className="text-system-800"
          label="Email:"
          type="email"
        />
        <TextInput
          {...register("password")}
          className="text-system-800"
          label="Senha:"
          type="password"
        />
      </div>
      <Button full>Entrar</Button>
    </form>
  );
};
