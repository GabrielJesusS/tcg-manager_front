import {
  actualCardOnComposeAtom,
  cardToRemoveAtom,
  deckComposeAtom,
  deckComposeIdsAtom,
} from "@/presentation/store/genericAtoms";
import {
  deckCardInsertAtom,
  deckCardRemoveAtom,
  deckFilterAtom,
} from "@/presentation/store/modal";
import {
  useForm,
  FieldArray,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { Modal } from "../Modal";
import { Textinput } from "../Textinput";

interface DeckCardInsertModalProps {}

interface ISearchCardParams {
  params: string;
}

interface ICardParams {
  pokemonCards: {
    cardId: string;
    name: string;
    image: string;
  }[];
}

export const DeckCardRemoveModal = ({}: DeckCardInsertModalProps) => {
  const [isOpen, setOpen] = useRecoilState(deckCardRemoveAtom);
  const [composeIds, insertOnCompose] = useRecoilState(deckComposeIdsAtom);
  const setActualCards = useSetRecoilState(actualCardOnComposeAtom);
  const x = useRecoilValue(cardToRemoveAtom);
  const reset = useResetRecoilState(deckComposeAtom(x));

  function toggleOpen() {
    setOpen(!isOpen);
  }

  function removeCard() {
    const actualList = composeIds.filter((item) => item !== x);

    insertOnCompose(actualList);
    reset();
    toggleOpen();
  }

  console.log(x);

  return (
    <Modal close={toggleOpen} isOpen={isOpen}>
      <div className="space-y-4">
        <h2 className="font-bold text-xl text-center">Remover carta?</h2>
        <p className="text-center">
          Você poderá adicioná-la novamente caso queira!
        </p>
        <button onClick={removeCard} type="button" className="btn btn-error w-full ">
          Remover
        </button>
      </div>
    </Modal>
  );
};
