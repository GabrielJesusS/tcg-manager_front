import { atom } from "recoil";

interface IPaginationContent{
    pageSize: number
    totalCount:number
}

export const cardPaginationAtom = atom<IPaginationContent>({
    key: "CardPaginationAtom",
    default: {
        pageSize: 20,
        totalCount: 80
    }
})

export const cardListOffsetAtom = atom<number>({
    key: "CardListOffsetAtom",
    default: 1
})