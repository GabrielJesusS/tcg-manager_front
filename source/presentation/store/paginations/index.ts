import { atom } from "recoil";

interface IPaginationContent{
    actualPage: number;
    maxPages: number;
}

export const cardPaginationAtom = atom<IPaginationContent>({
    key: "CardPaginationAtom",
    default: {
        actualPage:1,
        maxPages: 1
    }
})