import { cardFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import { Modal } from "../Modal";

interface CardFilterModalProps {}

export const CardFilterModal = ({}) => {
  const [isOpen, setOpen] = useRecoilState(cardFilterAtom);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  return (
    <Modal close={toggleOpen} isOpen={isOpen}>
      <form action="" >
        <div className="space-y-6">
        <Dropdown
          options={[{ text: "opt-1", value: "opt-2" }]}
          label="Tipo"
          selectPlaceholder="Selecione um tipo"
        />
        <Dropdown
          options={[{ text: "opt-1", value: "opt-2" }]}
          label="Supertipo"
          selectPlaceholder="Selecione um supertipo"
        />
        <Dropdown
          options={[{ text: "opt-1", value: "opt-2" }]}
          label="Subtipo"
          selectPlaceholder="Selecione um subtipo"
        />
        </div>
        <button className="btn btn-primary w-full mt-20">Filtrar</button>
      </form>
    </Modal>
  );
};