import { atom } from "recoil";

export const deckFilterAtom = atom<boolean>({
  key: "DeckFilterAtom",
  default: false,
});

export const cardFilterAtom = atom<boolean>({
  key: "CardFilterAtom",
  default: false,
});

export const deckCardFilterAtom = atom<boolean>({
  key: "DeckCardFilterAtom",
  default: false,
});

export const articlesFilterAtom = atom<boolean>({
  key: "ArticleFilterAtom",
  default: false,
});

export const deckCardInsertAtom = atom<boolean>({
  key: "DeckCardInsertModal",
  default: false,
});

export const deckCardRemoveAtom = atom<boolean>({
  key: "DeckCardRemoveModal",
  default: false,
});

export const articleEditAtom = atom<boolean>({
  key: "ArticleEditModal",
  default: false,
});

export const userEditModalAtom = atom<boolean>({
  key: "UserEditModalAtom",
  default: false,
});