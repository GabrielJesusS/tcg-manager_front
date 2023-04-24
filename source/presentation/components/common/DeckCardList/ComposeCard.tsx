import CardMock from "@/presentation/public/images/rsc/mocks/card-back.png";
import PokeballIcon from "@/presentation/public/images/icons/pokeball-counter.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  actualCardOnComposeAtom,
  cardCoverAtom,
  cardEditOpen,
  deckComposeAtom,
  selectedCardAtom,
} from "@/presentation/store/genericAtoms";

interface IComposeCard {
  cardId: string;
}

export const ComposeCard = ({ cardId }: IComposeCard): JSX.Element => {
  const [cardInfos, setCardToCompose] = useRecoilState(deckComposeAtom(cardId));
  const [cover, setCover] = useRecoilState(cardCoverAtom);
  const setEditOpen = useSetRecoilState(cardEditOpen);
  const setSelected = useSetRecoilState(selectedCardAtom);

  function selectCard() {
    setEditOpen(true);
    setSelected(cardInfos.cardId);
  }

  return (
    <button onClick={selectCard} className="w-full relative" type="button">
      {cardInfos.cardId === cover && (
        <span className="absolute text-system shadow-md bg-system-800 px-3 py-1 rounded-r-md left-0 top-10">
          Cover
        </span>
      )}
      <img src={cardInfos.image} alt={cardInfos.cardId} className="w-full"/>
      <span className="absolute flex  bg-system shadow-md rounded-l-md right-0 bottom-10">
        <span className="block text-system-800 font-bold px-3">
          {cardInfos.quantity.toString().padStart(2, "0")}
        </span>
        <span className="bg-primary flex py-1 px-2 rounded-l-md">
          <PokeballIcon className="w-4 fill-system" />
        </span>
      </span>
    </button>
  );
};
