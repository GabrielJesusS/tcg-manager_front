import { atom } from "recoil";


export const cardFilterAtom = atom<boolean>({
    key: "CardFilterAtom",
    default: false
})


export const deckFilterAtom = atom<boolean>({
    key: "DeckFilterAtom",
    default: false
})

export const articlesFilterAtom = atom<boolean>({
    key: "ArticleFilterAtom",
    default: false
})

export const deckCardInsertAtom = atom<boolean>({
    key: "DeckCardInsertModal",
    default: false
})

export const deckCardRemoveAtom = atom<boolean>({
    key: "DeckCardRemoveModal",
    default: false
})