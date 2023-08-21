import { deckCardFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { CardFilter } from "../Filters/CardFilter";
import { Button } from "../Button";

export const CardFilterModal = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(deckCardFilterAtom);

  function toggleOpen(): void {
    setOpen(!isOpen);
  }

  return (
    <DefaultQuestionModal close={toggleOpen} isOpen={isOpen}>
      <div className="space-y-safe">
        <CardFilter />
        <Button full>Filtrar</Button>
      </div>
    </DefaultQuestionModal>
  );
};
