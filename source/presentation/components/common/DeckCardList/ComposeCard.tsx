import PokeballIcon from "@/presentation/public/images/icons/pokeball-counter.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  cardCoverAtom,
  cardEditOpen,
  deckComposeAtom,
  selectedCardAtom,
} from "@/presentation/store/genericAtoms";
import { MouseEvent, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { useContextMenu } from "@/presentation/hooks/useContextMenu";
import { useClickOutside } from "@/presentation/hooks/useClickOutside";
import { Button } from "../Button";

interface IComposeCard {
  cardId: string;
}

export const ComposeCard = ({ cardId }: IComposeCard): JSX.Element => {
  const cardInfos = useRecoilValue(deckComposeAtom(cardId));
  const cover = useRecoilValue(cardCoverAtom);
  const setEditOpen = useSetRecoilState(cardEditOpen);
  const [selectedCard, setSelected] = useRecoilState(selectedCardAtom);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useContextMenu(cardRef, menuRef);
  useClickOutside(cardRef, () => {
    setMenuOpen(false);
  });

  function selectCard(): void {
    setEditOpen(true);
    setSelected(cardInfos.cardId);
  }

  function handleRightClick(event: MouseEvent): void {
    event.preventDefault();
    setMenuOpen(true)
  }

  const isSelected = useMemo(() => selectedCard === cardId, [selectedCard]);

  return (
    <div ref={cardRef} className="relative">
      <button
        onClick={selectCard}
        className={classNames("w-full relative  rounded-sm", {
          "outline-dashed outline-secondary": isSelected || isMenuOpen,
        })}
        onContextMenu={handleRightClick}
        type="button"
      >
        {cardInfos.cardId === cover && (
          <span className="absolute text-system shadow-md bg-system-800 px-3 py-1 rounded-r-md left-0 top-10">
            Cover
          </span>
        )}
        <img src={cardInfos.image} alt={cardInfos.cardId} className="w-full" />
        <span className="absolute flex  bg-system shadow-md rounded-l-md right-0 bottom-10">
          <span className="block text-system-800 font-bold px-3">
            {cardInfos.quantity.toString().padStart(2, "0")}
          </span>
          <span className="bg-primary flex py-1 px-2 rounded-l-md">
            <PokeballIcon className="w-4 fill-system" />
          </span>
        </span>
      </button>

      <div
        ref={menuRef}
        className={classNames("absolute z-30 bg-system shadow-lg rounded-lg p-safe whitespace-nowrap ", {
          "invisible opacity-0 pointer-events-none ": !isMenuOpen,
          
        })}
      >
        <Button color="error">
          Excluir carta
        </Button>
      </div>
    </div>
  );
};
