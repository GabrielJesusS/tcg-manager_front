import { TApplicationError } from "@/core/Errors"
import { KeyedMutator } from "swr"

export interface IFetch<T>{
    data: T | undefined,
    error: TApplicationError | undefined
    update: Function
    isLoading: boolean
}