import { articlesFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import { Dropdown } from "../Dropdown";
import { DefaultQuestionModal } from "./DefaultQuestionModal";

export const ArticleFilterModal = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(articlesFilterAtom);

  function toggleOpen(): void {
    setOpen(!isOpen);
  }

  return (
    <DefaultQuestionModal close={toggleOpen} isOpen={isOpen}>
      <form action="">
        <div className="space-y-6">
          {/*      <Dropdown
            options={[{ text: "opt-1", value: "opt-2" }]}
            label="Classificação"
            selectPlaceholder="Selecione o tipo"
          /> */}
        </div>
        <button className="btn btn-primary w-full mt-20">Filtrar</button>
      </form>
    </DefaultQuestionModal>
  );
};
