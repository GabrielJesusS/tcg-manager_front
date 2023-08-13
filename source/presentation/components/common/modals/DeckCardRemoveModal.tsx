import {
  cardToRemoveAtom,
  deckComposeAtom,
  deckComposeIdsAtom,
} from "@/presentation/store/genericAtoms";
import { deckCardRemoveAtom } from "@/presentation/store/modal";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";

export const DeckCardRemoveModal = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(deckCardRemoveAtom);
  const [composeIds, insertOnCompose] = useRecoilState(deckComposeIdsAtom);
  const x = useRecoilValue(cardToRemoveAtom);
  const reset = useResetRecoilState(deckComposeAtom(x));

  function toggleOpen(): void {
    setOpen(!isOpen);
  }

  function removeCard(): void {
    const actualList = composeIds.filter((item) => item !== x);

    insertOnCompose(actualList);
    reset();
    toggleOpen();
  }

  return (
    <DefaultQuestionModal close={toggleOpen} isOpen={isOpen}>
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-center">Remover carta?</h2>
        <p className="text-center">
          Você poderá adicioná-la novamente caso queira!
        </p>
        <button
          onClick={removeCard}
          type="button"
          className="btn btn-error w-full "
        >
          Remover
        </button>
      </div>
    </DefaultQuestionModal>
  );
};
