import { atom } from "recoil";

export interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string;
}

export const cardFilterAtom = atom<ICardFilter>({
  key: "CardFilterAtom",
  default: {
    name: "",
    types: "",
    subtypes: "",
    supertype: "",
  },
});
