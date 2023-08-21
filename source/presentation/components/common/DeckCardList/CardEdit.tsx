import { QuantityManager } from "./QuantityManager";
import { useEffect, useMemo, useRef } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  cardCoverAtom,
  cardEditOpen,
  deckComposeAtom,
  deckComposeIdsAtom,
  quantityPerName,
  selectedCardAtom,
} from "@/presentation/store/genericAtoms";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useGetMobile } from "@/presentation/hooks/useGetMobile";
import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { CardSupertypeEnum } from "@/presentation/enums/CardSupertype";
import { Button } from "../Button";
import { useClickOutside } from "@/presentation/hooks/useClickOutside";

const animation: AnimationProps = {
  initial: {
    translateY: "200%",
    opacity: 0,
  },
  animate: {
    translateY: "0%",
    opacity: 1,
  },
  exit: {
    opacity: 0,
    translateY: "200%",
    transition: {
      duration: 0.7,
    },
  },
  transition: {
    duration: 0.5,
  },
};

export const CardEdit = (): JSX.Element => {
  const isMobile = useGetMobile();
  const [cover, setCover] = useRecoilState(cardCoverAtom);
  const [editOpen, setEditOpen] = useRecoilState(cardEditOpen);
  const setDeckComposeIds = useSetRecoilState(deckComposeIdsAtom);
  const [selectedCardId, setSelectedCardId] = useRecoilState(selectedCardAtom);
  const [cardInfos, setCardToCompose] = useRecoilState(
    deckComposeAtom(selectedCardId)
  );
  const resetCard = useResetRecoilState(deckComposeAtom(selectedCardId));
  const ref = useRef(null);
  const sameCardsOnDeck = useRecoilValue(quantityPerName(cardInfos.name));

  useClickOutside(ref, () => {
    setSelectedCardId("");
  });

  const isCover = useMemo<boolean>(
    () => cover === cardInfos.cardId,

    [cover, cardInfos]
  );

  function defineCover(): void {
    setCover(cardInfos.cardId);
  }

  function removeCard(): void {
    setDeckComposeIds((e) => e.filter((i) => i !== selectedCardId));
    setSelectedCardId("");
    setEditOpen(false);
    resetCard();
  }

  function removeCover(): void {
    setCover("");
  }

  function manipulateQuantity(value: number): void {
    setCardToCompose({ ...cardInfos, quantity: value });
  }

  useEffect(() => {
    setEditOpen(!isMobile);
  }, [isMobile]);

  function toggleOpen(): void {
    setSelectedCardId("");
    setEditOpen((old) => !old);
  }

  const cardLimit = useMemo<number>(() => {
    if (cardInfos.supertype === CardSupertypeEnum.ENERGY) {
      return 60;
    }
    return 4;
  }, [sameCardsOnDeck]);

  const cardExists = selectedCardId !== "";

  return (
    <AnimatePresence>
      {editOpen && (
        <motion.div
          {...animation}
          ref={ref}
          className="fixed top-0 left-0 z-30 lg:z-0 lg:relative w-full h-full  lg:h-auto lg:max-w-xs lg:rounded-2xl bg-system shadow-md"
        >
          <div className="lg:sticky lg:top-10">
            {!cardExists && (
              <p className="text-center font-bold text-2xl py-5">
                Selecione uma carta
              </p>
            )}

            {cardExists && (
              <div className="p-5 space-y-5 h-full flex flex-col items-center">
                <button className="self-end lg:hidden" onClick={toggleOpen}>
                  <CloseIcon className="h-8 w-8 fill-system-800" />
                </button>
                <h3 className="font-bold text-2xl text-center">
                  {cardInfos.name}
                </h3>
                <img
                  src={cardInfos.image}
                  alt=""
                  className="w-2/3 mx-auto max-w-xs"
                />
                <div className="mx-auto w-fit">
                  <QuantityManager
                    total={sameCardsOnDeck}
                    value={cardInfos.quantity}
                    manipulation={manipulateQuantity}
                    limit={cardLimit}
                  />
                </div>
                {!isCover && (
                  <Button onClick={defineCover} full>
                    {cover === "" && "Definir como capa"}
                    {cover !== "" && "Alterar como capa"}
                  </Button>
                )}
                {isCover && (
                  <Button onClick={removeCover} full>
                    Remover capa
                  </Button>
                )}
                <Button onClick={removeCard} full color="error">
                  Remover carta
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
