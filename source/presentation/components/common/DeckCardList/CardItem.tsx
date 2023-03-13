import PlusIcon from "@/presentation/public/images/icons/plus.svg";
import MinusIcon from "@/presentation/public/images/icons/minus.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { actualCardOnComposeAtom, deckComposeAtom } from "@/presentation/store/genericAtoms";

interface CardItemProps {
  cardId: string;
  pokemonName?: string;
  cardImage?: string;
}

export const DeckCardItem = ({ pokemonName, cardId }: CardItemProps) => {

  const [cardInfos, setCardToCompose] = useRecoilState(deckComposeAtom(cardId))
  const actualCard = useRecoilValue(actualCardOnComposeAtom)

  setCardToCompose(actualCard)

  function increaseCards(){
    setCardToCompose({...cardInfos, quantity: cardInfos.quantity+1})
  }

  console.log(cardInfos)

  return (
    <div className="flex justify-between">
      <p className="dft-link">{cardInfos.name}</p>
      <span className="flex justify-center items-center space-x-1 w-fit">
        <button
          type="button"
          className="bg-secondary disabled:bg-system-400 h-5 w-5 flex justify-center items-center rounded"
        >
          <MinusIcon />
        </button>
        <span className="bg-system-200 w-6 h-6 rounded flex justify-center items-center">
          {cardInfos.quantity}
        </span>
        <button
        onClick={increaseCards}
          type="button"
          className="bg-secondary disabled:bg-system-400 h-5 w-5 flex justify-center items-center rounded"
        >
          <PlusIcon />
        </button>
      </span>
    </div>
  );
};
