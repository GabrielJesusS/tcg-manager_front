import { useRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { userEditModalAtom } from "@/presentation/store/modal";
import { UserEditForm } from "../Forms/UserEditForm";

export const UserEditModal = (): JSX.Element => {
  const [isOpen, setIsOpen] = useRecoilState(userEditModalAtom);

  function toggleModal(): void {
    setIsOpen((e) => !e);
  }

  return (
    <DefaultQuestionModal
      small
      close={toggleModal}
      title={"Editar perfil"}
      isOpen={isOpen}
    >
      <UserEditForm />
    </DefaultQuestionModal>
  );
};
