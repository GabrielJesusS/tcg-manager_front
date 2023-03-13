import { deckComposeAtom, deckComposeIdsAtom } from "@/presentation/store/genericAtoms";
import { deckCardInsertAtom } from "@/presentation/store/modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { DeckCardItem } from "./CardItem";

interface DeckCardListProps {}

export const DeckCardList = ({}: DeckCardListProps) => {
  const [modalCardAdd, setModalCardAdd] = useRecoilState(deckCardInsertAtom);
  const deckComposeIds = useRecoilValue(deckComposeIdsAtom)

  function toggleModal() {
    setModalCardAdd(!modalCardAdd);
  }


  return (
    <div className="space-y-6">
    {deckComposeIds.length > 0 && (
        <div className="shadow bg-system p-3 border rounded-lg border-system-600">
          <ul>
            {deckComposeIds.map((card) => {
              return <DeckCardItem pokemonName={""} cardId={card}/>;
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
