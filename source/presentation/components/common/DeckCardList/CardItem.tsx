import PlusIcon from "@/presentation/public/images/icons/plus.svg";
import MinusIcon from "@/presentation/public/images/icons/minus.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  actualCardOnComposeAtom,
  cardToRemoveAtom,
  deckComposeAtom,
} from "@/presentation/store/genericAtoms";
import { InputHTMLAttributes, useEffect } from "react";
import { deckCardRemoveAtom } from "@/presentation/store/modal";

interface CardItemProps {
  cardId: string;
}

export const DeckCardItem = ({ cardId }: CardItemProps) => {
  const [cardInfos, setCardToCompose] = useRecoilState(deckComposeAtom(cardId));
  const [isOpen, setOpen] = useRecoilState(deckCardRemoveAtom);
  const actualCard = useRecoilValue(actualCardOnComposeAtom);
  const setCardToRemove = useSetRecoilState(cardToRemoveAtom)

  useEffect(() => {
    console.log("dispara quando?");
    if (actualCard.cardId.includes(cardId)) {
      setCardToCompose({ ...actualCard });
    }
  }, []);

  function increaseCards() {
    setCardToCompose({ ...cardInfos, quantity: cardInfos.quantity + 1 });
  }

  function decreaseCards() {
    setCardToCompose({ ...cardInfos, quantity: cardInfos.quantity - 1 });
  }

  return (
    <div className="flex justify-between border-2 border-system-200 p-3 rounded-lg">
      <p className="dft-link peer">{cardInfos.name}</p>
      <div className="bg-system  max-w-xs space-y-6 shadow-2xl border border-system-200 peer-hover:bottom-5 hover:bottom-5 opacity-0 hover:opacity-100 peer-hover:opacity-100 transition-all -z-40 duration-150 peer-hover:z-20 hover:z-20 bottom-10 p-safe w-fit rounded-lg absolute">
        <picture className="w-fit">
          <img src={cardInfos.image} alt="" className="" />
        </picture>
        <button
          type="button"
          onClick={() => { setCardToRemove(cardInfos.cardId) ;setOpen(true)}}
          className="btn btn-error w-full"
        >
          {" "}
          Remover carta
        </button>
      </div>
      <span className="flex justify-center items-center space-x-1 w-fit">
        <button
          onClick={decreaseCards}
          disabled={cardInfos.quantity <= 1}
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
          disabled={cardInfos.quantity >= 4}
          type="button"
          className="bg-secondary disabled:bg-system-400 h-5 w-5 flex justify-center items-center rounded"
        >
          <PlusIcon />
        </button>
      </span>
    </div>
  );
};
