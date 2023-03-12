import { deckCardInsertAtom, deckFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import { Modal } from "../Modal";
import { Textinput } from "../Textinput";

interface DeckCardInsertModalProps {}

export const DeckCardInsertModal = ({}: DeckCardInsertModalProps) => {
  const [isOpen, setOpen] = useRecoilState(deckCardInsertAtom)

  function toggleOpen() {
    setOpen(!isOpen);
  }

  return (
    <Modal close={toggleOpen} isOpen={isOpen}>
      <form>
        <div className="space-y-6">
          <Textinput
            label="Busque uma carta"
            type="text"
            placeholder="Chariz...."
          />
          <div>
            <p className="font-semibold text-lg">Desculpe, não encontrei :(</p>
          </div>
        </div>
        <button type="button" className="btn btn-primary w-full mt-20">Adicionar</button>
      </form>
    </Modal>
  );
};
