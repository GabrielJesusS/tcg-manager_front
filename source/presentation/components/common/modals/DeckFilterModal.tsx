import { deckFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import { Modal } from "../Modal";
import { Radioinput } from "../Radioinput";

interface DeckFilterModalProps {}

export const DeckFilterModal = ({}: DeckFilterModalProps) => {
  const [isOpen, setOpen] = useRecoilState(deckFilterAtom);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  return (
    <Modal close={toggleOpen} isOpen={isOpen}>
      <form action="">
        <div className="space-y-6">
          <Dropdown
            options={[{ text: "opt-1", value: "opt-2" }]}
            label="Tipo"
            selectPlaceholder="Selecione um tipo"
          />
          <label className="block">
            <Radioinput
              className="mx-auto"
              optionsQtd={5}
              radioName="Nota do deck"
            ></Radioinput>
          </label>
        </div>
        <button className="btn btn-primary w-full mt-20">Filtrar</button>
      </form>
    </Modal>
  );
};
