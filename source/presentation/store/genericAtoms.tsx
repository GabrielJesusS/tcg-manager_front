import { atom, atomFamily, selector } from "recoil";

interface IUserDataAtomProps {
  publicId: string;
  name: string;
  email: string;
  picture: string;
  level: number;
}

interface IDeckComposeProps {
  cardId: string;
  name: string;
  image: string;
  quantity: number;
}

interface IDeckSendObjProps {
  cardId: string;
  name: string;
  quantity: number;
}

export const userDataAtom = atom<IUserDataAtomProps | null>({
  key: "UserDataAtom",
  default: null,
});

export const deckComposeAtom = atomFamily<IDeckComposeProps, string>({
  key: "DeckComposeAtom",
  default: {
    cardId: "",
    name: "",
    image: "",
    quantity: 0,
  },
});

export const deckComposeArrayAtom = selector<Array<IDeckSendObjProps>>({
  key: "DeckComposeArrayAtom",
  get: ({ get }) => {
    const cardsIds = get(deckComposeIdsAtom);

    return cardsIds.reduce((total, cards) => {
      const cardsOnCompose: IDeckComposeProps = get(deckComposeAtom(cards));

      return [
        ...total,
        {
          cardId: cardsOnCompose.cardId,
          name: cardsOnCompose.name,
          quantity: cardsOnCompose.quantity,
        },
      ];
    }, []);
  },
});

export const actualCardOnComposeAtom = atom<IDeckComposeProps>({
  key: "ActualCardOnComposeAtom",
  default: {
    cardId: "",
    name: "",
    image: "",
    quantity: 0,
  },
});

export const deckComposeIdsAtom = atom<string[]>({
  key: "DeckComposeIdsAtom",
  default: [],
});

export const totalDeckCardsAtom = selector<number>({
  key: "TotalDeckCardsOnCompose",
  get: ({ get }) => {
    const cardsIds = get(deckComposeIdsAtom);

    return cardsIds.reduce((total, cards) => {
      const cardsOnCompose: IDeckComposeProps = get(deckComposeAtom(cards));

      return total + cardsOnCompose.quantity;
    }, 0);
  },
});

export const cardToRemoveAtom = atom<string>({
  key: "CardToRemoveAtom",
  default: "",
});
