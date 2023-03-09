import { articlesFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import { Modal } from "../Modal";

interface ArticleFilterModalProps {}

export const ArticleFilterModal = ({}) => {
  const [isOpen, setOpen] = useRecoilState(articlesFilterAtom);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  return (
    <Modal close={toggleOpen} isOpen={isOpen}>
      <form action="" >
        <div className="space-y-6">
        <Dropdown
          options={[{ text: "opt-1", value: "opt-2" }]}
          label="Classificação"
          selectPlaceholder="Selecione o tipo"
        />
        </div>
        <button className="btn btn-primary w-full mt-20">Filtrar</button>
      </form>
    </Modal>
  );
};
