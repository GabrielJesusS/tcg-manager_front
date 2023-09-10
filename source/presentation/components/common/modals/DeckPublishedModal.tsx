import { useRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { deckPublishedModalAtom } from "@/presentation/store/modal";
import { useRouter } from "next/router";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";

export const DeckPublishedModal = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(deckPublishedModalAtom);
  const { push } = useRouter();

  function handleClose(): void {
    setOpen(false);
    void push(PageRoutesEnum.HOME);
  }

  return (
    <DefaultQuestionModal
      close={handleClose}
      small
      action={{ actionClick: handleClose, actionText: "Confirmar" }}
      isOpen={isOpen}
    >
      <p className="my-4">Seu Deck foi publicado com sucesso!</p>
    </DefaultQuestionModal>
  );
};
