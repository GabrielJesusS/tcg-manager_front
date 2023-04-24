import PokeballIcon from "@/presentation/public/images/icons/pokeball-counter.svg";
import { deckCardInsertAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";
import PlusIcon from "@/presentation/public/images/icons/plus.svg"

export const DeckInsertButton = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(deckCardInsertAtom);

  function toggleModal(): void {
    setOpen((old) => !old);
  }

  return (
    <div className="w-full relative aspect-card border-4 border-dashed rounded-md flex outline-system-200">
      <button
        onClick={toggleModal}
        type="button"
        className="btn btn-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  lg:w-full"
      >
       <span className="hidden lg:block"> Nova carta</span>
       <PlusIcon className="fill-system lg:hidden "/>
      </button>
      <PokeballIcon className="fill-system-200" />
    </div>
  );
};
