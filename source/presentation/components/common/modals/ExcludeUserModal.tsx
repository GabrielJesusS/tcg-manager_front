import { useRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { userExcludeModalAtom } from "@/presentation/store/modal";

export const ExcludeUserModal = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(userExcludeModalAtom);

  return (
    <DefaultQuestionModal
      small
      isOpen={isOpen}
      close={() => {
        setOpen(false);
      }}
      title="Excluir conta"
      action={{
        actionText: "Manter conta",
        actionClick: () => {
          setOpen(false);
        },
      }}
      secondAction={{
        secondActionText: "Excluir conta",
        secondActionClick: () => {},
      }}
    >
      <div className="my-2">
        <p>Deseja mesmo excluir esta conta?</p>
        <small className="text-error">Atenção, esta ação é irreversível!</small>
      </div>
    </DefaultQuestionModal>
  );
};
