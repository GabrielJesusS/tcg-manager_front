import { atom } from "recoil";

export const cardPaginationAtom = atom<number>({
    key: "CardPaginationAtom",
    default: 1
})