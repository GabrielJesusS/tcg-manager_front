import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  useRecoilCallback,
} from "recoil";
import { normalizeString } from "../utils/normalizeString";

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

interface IFilterParams {
  name?: string;
  type?: string;
  supertype?: string;
}

interface IDeckStatistics {
  pokemon: number;
  energy: number;
  trainer: number;
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

export const deckStatisticsSelector = selector<IDeckStatistics>({
  key: "DeckStatisticsSelector",
  get: ({ get }) => {
    const cardsIds = get(deckComposeIdsAtom);

    return cardsIds.reduce(
      (total, cards): IDeckStatistics => {
        const cardsOnCompose: IDeckComposeProps = get(deckComposeAtom(cards));
        const key: string = normalizeString(cardsOnCompose.supertype);

        return {
          ...total,
          [key]: total[key] + cardsOnCompose.quantity,
        };
      },
      { pokemon: 0, energy: 0, trainer: 0 }
    );
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

export const quantityPerName = selectorFamily({
  key: "QuantityPerNameSelector",
  get:
    (name) =>
    ({ get }) => {
      const cardsIds = get(deckComposeIdsAtom);
      const statistics = get(deckStatisticsSelector)

      return cardsIds.reduce((total, id) => {
        const cardOnCompose: IDeckComposeProps = get(deckComposeAtom(id));

        if (cardOnCompose.name === name) {
          return total + cardOnCompose.quantity;
        }
        return total;
      }, 0);
    },
});

export const cardToRemoveAtom = atom<string>({
  key: "CardToRemoveAtom",
  default: "",
});

export const selectedCardAtom = atom<string>({
  key: "SelectedCardAtom",
  default: "",
});

export const cardEditOpen = atom<boolean>({
  key: "CardEditOpen",
  default: true,
});

export const cardCoverAtom = atom<string>({
  key: "CardCoverAtom",
  default: "",
});

export const cardSelector = selectorFamily<IDeckComposeProps, string>({
  key: "CardSelector",
  get:
    (cardId) =>
    ({ get }) => {
      const card = get(deckComposeAtom(cardId));

      return card;
    },
});
