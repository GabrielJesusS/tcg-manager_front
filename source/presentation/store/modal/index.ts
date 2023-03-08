import { atom } from "recoil";


export const cardFilterAtom = atom<boolean>({
    key: "CardFilterAtom",
    default: false
})