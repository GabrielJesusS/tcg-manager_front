import { QuantityManager } from "./QuantityManager";
import { useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cardCoverAtom,
  cardEditOpen,
  deckComposeAtom,
  quantityPerName,
  selectedCardAtom,
} from "@/presentation/store/genericAtoms";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useGetMobile } from "@/presentation/hooks/useGetMobile";
import CloseIcon from "@/presentation/public/images/icons/close.svg";
import { CARD_SUPERTYPE } from "@/presentation/enums/CardSupertype";

export const CardEdit = (): JSX.Element => {
  const isMobile = useGetMobile();
  const [cover, setCover] = useRecoilState(cardCoverAtom);
  const [editOpen, setEditOpen] = useRecoilState(cardEditOpen);
  const selectedCardId = useRecoilValue(selectedCardAtom);
  const [cardInfos, setCardToCompose] = useRecoilState(
    deckComposeAtom(selectedCardId)
  );
  const sameCardsOnDeck = useRecoilValue(quantityPerName(cardInfos.name));

  const isCover = useMemo<boolean>(
    () => cover === cardInfos.cardId,

    [cover, cardInfos]
  );

  console.log(sameCardsOnDeck);

  function defineCover(): void {
    setCover(cardInfos.cardId);
  }

  function removeCover(): void {
    setCover("");
  }

  function manipulateQuantity(value: number) {
    setCardToCompose({ ...cardInfos, quantity: value });
  }

  useEffect(() => {
    setEditOpen(!isMobile);
  }, [isMobile]);

  function toggleOpen() {
    setEditOpen((old) => !old);
  }

  const cardLimit = useMemo<number>(() => {
    if (cardInfos.supertype === CARD_SUPERTYPE.ENERGY) {
      return 60;
    }
    return 4;
  }, [sameCardsOnDeck]);

  const cardExists = selectedCardId !== "";

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

  return (
    <AnimatePresence>
      {editOpen && (
        <motion.div
          {...animation}
          className="fixed top-0 left-0 z-20 lg:z-0 lg:relative w-full h-full  lg:h-auto lg:max-w-xs lg:rounded-2xl bg-system shadow-md"
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
                  <button
                    onClick={defineCover}
                    className="btn btn-primary w-full max-w-xs"
                    type="button"
                  >
                    {cover === "" && "Definir como capa"}
                    {cover !== "" && "Alterar como capa"}
                  </button>
                )}
                {isCover && (
                  <button
                    onClick={removeCover}
                    className="btn btn-error w-full max-w-xs"
                    type="button"
                  >
                    Remover capa
                  </button>
                )}
                <button className="btn btn-error w-full max-w-xs" type="button">
                  Remover carta
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
