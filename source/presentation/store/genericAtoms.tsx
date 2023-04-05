import { atom, atomFamily, selector } from "recoil";

interface IUserDataAtomProps {
  id: number | string;
  user_name: string;
  name: string;
  email: string;
  experience_level: number;
}

interface IDeckObjProps {
  cardId: string;
  name: string;
  quantity: number;
  subtypes: string[];
  supertype: string;
}

interface IDeckComposeProps extends IDeckObjProps {
  image: string;
}

const emptyCard: IDeckComposeProps = {
  cardId: "",
  name: "",
  image: "",
  subtypes: [],
  supertype: "",
  quantity: 0,
};

export const userDataAtom = atom<IUserDataAtomProps | null>({
  key: "UserDataAtom",
  default: null,
});

export const deckComposeAtom = atomFamily<IDeckComposeProps, string>({
  key: "DeckComposeAtom",
  default: emptyCard,
});

export const deckComposeArrayAtom = selector<Array<IDeckObjProps>>({
  key: "DeckComposeArrayAtom",
  get: ({ get }) => {
    const cardsIds = get(deckComposeIdsAtom);

    return cardsIds.reduce((total, cards): Array<IDeckObjProps> => {
      const cardsOnCompose: IDeckComposeProps = get(deckComposeAtom(cards));

      return [
        ...total,
        {
          cardId: cardsOnCompose.cardId,
          name: cardsOnCompose.name,
          quantity: cardsOnCompose.quantity,
          subtypes: cardsOnCompose.subtypes,
          supertype: cardsOnCompose.supertype,
        },
      ];
    }, []);
  },
});

export const actualCardOnComposeAtom = atom<IDeckComposeProps>({
  key: "ActualCardOnComposeAtom",
  default: emptyCard,
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
