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
