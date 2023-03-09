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