import { deckCardInsertAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import { DeckCardItem } from "./CardItem";

interface DeckCardListProps {}

export const DeckCardList = ({}: DeckCardListProps) => {
  const [modalCardAdd, setModalCardAdd] = useRecoilState(deckCardInsertAtom);

  function toggleModal() {
    setModalCardAdd(!modalCardAdd);
  }

  console.log(modalCardAdd);

  return (
    <div className="space-y-6">
      <div className="shadow bg-system p-3 border rounded-lg border-system-600">
        <DeckCardItem pokemonName="Ampharos" />
      </div>
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
