import { atom } from "recoil";


export const cardFilterAtom = atom<boolean>({
    key: "CardFilterAtom",
    default: false
})


export const deckFilterAtom = atom<boolean>({
    key: "DeckFilterAtom",
    default: false
})