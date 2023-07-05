import { atom } from "recoil";

export const linkModalAtom = atom<boolean>({
    key: "LinkModalAtom",
    default: false,
})

export const linkURLAtom = atom<string>({
    key: "LinkURLAtom",
    default: ''
})