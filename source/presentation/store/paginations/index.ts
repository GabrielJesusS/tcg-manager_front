import { atom } from "recoil";

interface IPaginationContent{
    pageSize: number
    totalCount:number
}

export const paginationAtom = atom<IPaginationContent>({
    key: "PaginationAtom",
    default: {
        pageSize: 20,
        totalCount: 80
    }
})

export const listOffsetAtom = atom<number>({
    key: "ListOffsetAtom",
    default: 1
})