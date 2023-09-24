import { useGetProfile } from "@/presentation/hooks/useGetProfile";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { TextInput } from "../Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userEditSchema } from "@/presentation/schemas/userEditSchema";
import { useSetRecoilState } from "recoil";
import {
  userEditModalAtom,
  userExcludeModalAtom,
} from "@/presentation/store/modal";
import { ImageUploader } from "../ImageUploader";
import { uploadImages } from "@/presentation/utils/uploadImages";
import { useState } from "react";
import TrashCan from "@/presentation/public/images/icons/trash.svg";
import { createUploadProfileImageUseCase } from "@/factories/createUploadProfileImageUseCase";
import { createUpdateUserUseCase } from "@/factories/createUpdateUserUseCase";
import classNames from "classnames";
import { useNotify } from "@/presentation/hooks/useNotify";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";

interface UserEditParams {
  name: string;
  email: string;
  user_name: string;
  password: string;
}

interface IImageParams {
  url?: string;
  name?: string;
}

const EMPTY_IMAGE = {
  name: "",
  url: "",
};

const uploadProfileImageUseCase = createUploadProfileImageUseCase();
const updateUserUseCase = createUpdateUserUseCase();

export const UserEditForm = (): JSX.Element => {
  const setExcludeModalOpen = useSetRecoilState(userExcludeModalAtom);
  const setEditModalOpen = useSetRecoilState(userEditModalAtom);
  const [imageProfile, setImageProfile] = useState<IImageParams>(EMPTY_IMAGE);
  const [loading, setLoading] = useState(false);
  const { notify } = useNotify();

  const { data } = useGetProfile();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<UserEditParams>({
    resolver: yupResolver(userEditSchema),
    defaultValues: {
      user_name: data?.user_name,
      email: data?.email,
      name: data?.name,
    },
  });

  async function handleFormSubmit(formData: UserEditParams): Promise<void> {
    if (!data?.id) return;
    setLoading(true);
    if (imageProfile.url && imageProfile.name) {
      const response = await uploadProfileImageUseCase.execute({
        originalName: imageProfile.name,
        string64: imageProfile.url,
        user: { id: data?.id as string },
      });

      if (response.isLeft()) {
        notify(
          "Um erro ocorreu ao realizar upload da imagem, tente novamente mais tarde...",
          StatusEnum.ERROR
        );
      }
    }

    if (isDirty) {
      const response = await updateUserUseCase.execute({
        ...formData,
        id: data.id as string,
      });

      if (response.isLeft()) {
        notify("Erro ao atualizar dados...", StatusEnum.ERROR);
      }

      notify("Dados atualizados com sucesso", StatusEnum.SUCCESS);
      setEditModalOpen(false);
    }
  }

  function openExcludeModal(): void {
    setExcludeModalOpen(true);
  }

  function handleImageUpload(e: FileList | File[]): void {
    uploadImages(e, (url, name) => {
      setImageProfile({ url, name });
    });
  }

  function cleanImageField(): void {
    setImageProfile(EMPTY_IMAGE);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="space-y-4 mb-12">
        <div
          className={classNames("mx-auto w-fit space-y-4", {
            " pointer-events-none grayscale": loading,
          })}
        >
          <div className="relative group">
            {imageProfile.url ? (
              <button
                onClick={cleanImageField}
                className="text-system p-1 rounded-lg w-fit absolute opacity-0 group-hover:opacity-100 block mx-auto left-0 right-0  bottom-2 h-fit hover:bg-error hover:text-white"
              >
                <TrashCan />
              </button>
            ) : null}
            <Avatar size="small" image={imageProfile.url} />
          </div>
          <ImageUploader label="Alterar foto" onChange={handleImageUpload} />
        </div>
        <TextInput
          {...register("user_name")}
          error={errors.user_name?.message}
          disabled={loading}
          label="Apelido:"
          type="text"
        />
        <TextInput
          {...register("name")}
          error={errors.name?.message}
          disabled={loading}
          label="Nome:"
          type="text"
        />
        <TextInput
          {...register("email")}
          error={errors.email?.message}
          disabled={loading}
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

      <Button disabled={loading || !isDirty} full>
        Alterar perfil
      </Button>
      <Button
        disabled={loading}
        onClick={openExcludeModal}
        type="button"
        full
        color="error"
      >
        Excluir conta
      </Button>
    </form>
  );
};
