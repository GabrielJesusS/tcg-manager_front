import {
  deckComposeAtom,
  deckComposeIdsAtom,
} from "@/presentation/store/genericAtoms";
import { deckCardInsertAtom } from "@/presentation/store/modal";
import {
  FieldArray,
  UseFieldArrayAppend,
  UseFormRegister,
} from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { DeckCardItem } from "./CardItem";

interface INewDeckParams {
  deckName: string;
  deckDescription: string;
  deckCover: string;
  deckDiff: number;
  deckCards: {
    cardId: string
    quantity: number;
  }[];
}

interface DeckCardListProps {
  register: UseFormRegister<INewDeckParams>;
  appendFunction: UseFieldArrayAppend<INewDeckParams>;
}

export const DeckCardList = ({
  appendFunction,
  register,
}: DeckCardListProps) => {
  const [modalCardAdd, setModalCardAdd] = useRecoilState(deckCardInsertAtom);
  const deckComposeIds = useRecoilValue(deckComposeIdsAtom);

  function toggleModal() {
    setModalCardAdd(!modalCardAdd);
  }

  return (
    <div className="space-y-6">
      {deckComposeIds.length > 0 && (
        <div className="shadow bg-system p-3 border rounded-lg border-system-600">
          <ul className="space-y-3 md:space-y-0 md:gap-3 md:grid md:grid-cols-2">
            {deckComposeIds.map((card, index) => {
              return (
                <li key={card}>
                  <DeckCardItem
                    cardId={card}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button
        onClick={() => toggleModal()}
        type="button"
        className="btn btn-primary w-full"
      >
        Adicionar carta
      </button>
    </div>
  );
};
