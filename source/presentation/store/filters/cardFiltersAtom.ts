import { atom } from "recoil";

interface ICardFilter {
  name: string;
  types: string;
  supertype: string;
  subtypes: string ;
}

export const cardFilterAtom = atom<ICardFilter>({
  key: "CardFilterAtom",
  default: {
    name: '',
    types:'',
    subtypes: '',
    supertype: '',
  },
});
