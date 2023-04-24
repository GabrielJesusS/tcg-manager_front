import { atom } from "recoil";

interface ISetsFilter {
  name: string;
}

export const setsFilterAtom = atom<ISetsFilter>({
  key: "SetsFilterAtom",
  default: {
    name: '',
  },
});
