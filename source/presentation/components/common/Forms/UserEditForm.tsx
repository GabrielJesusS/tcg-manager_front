import { useGetProfile } from "@/presentation/hooks/useGetProfile";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { TextInput } from "../Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userEditSchema } from "@/presentation/schemas/userEditSchema";
import { useSetRecoilState } from "recoil";
import { userExcludeModalAtom } from "@/presentation/store/modal";

interface UserEditParams {
  name: string;
  email: string;
  user_name: string;
  password: string;
}

export const UserEditForm = (): JSX.Element => {
  const setExcludeModalOpen = useSetRecoilState(userExcludeModalAtom);

  const { data } = useGetProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserEditParams>({
    resolver: yupResolver(userEditSchema),
    defaultValues: {
      user_name: data?.user_name,
      email: data?.email,
      name: data?.name,
    },
  });

  async function handleFormSubmit(data): Promise<void> {
    console.log(data);
  }

  function openExcludeModal(): void {
    setExcludeModalOpen(true);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-4 mb-12">

         <div className="mx-auto w-fit space-y-4">
         <Avatar size="small" image="" />
        <Button type="button">
          Alterar foto
        </Button>
         </div>
        <TextInput
          {...register("user_name")}
          error={errors.user_name?.message}
          label="Apelido:"
          type="text"
        />
        <TextInput
          {...register("name")}
          error={errors.name?.message}
          label="Nome:"
          type="text"
        />
        <TextInput
          {...register("email")}
          error={errors.email?.message}
          label="Email:"
          type="text"
        />
        <TextInput
          {...register("password")}
          error={errors.password?.message}
          label="Nova senha:"
          type="text"
          disabled
        />
      </div>

      <Button full>Alterar perfil</Button>
      <Button onClick={openExcludeModal} type="button" full color="error">
        Excluir conta
      </Button>
    </form>
  );
};
