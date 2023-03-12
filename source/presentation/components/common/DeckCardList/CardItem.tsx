import PlusIcon from "@/presentation/public/images/icons/plus.svg"
import MinusIcon from "@/presentation/public/images/icons/minus.svg"


interface CardItemProps {
  pokemonName?: string;
  cardImage?: string;
}

export const DeckCardItem = ({ pokemonName }: CardItemProps) => {
  return (
    <div className="flex justify-between">
      <p className="dft-link">{pokemonName}</p>
      <span className="flex justify-center items-center space-x-1 w-fit">
        <button type="button" className="bg-secondary disabled:bg-system-400 h-5 w-5 flex justify-center items-center rounded"><MinusIcon/></button>
        <span className="bg-system-200 w-6 h-6 rounded flex justify-center items-center">0</span>
        <button type="button" className="bg-secondary disabled:bg-system-400 h-5 w-5 flex justify-center items-center rounded"><PlusIcon/></button>
      </span>
    </div>
  );
};
