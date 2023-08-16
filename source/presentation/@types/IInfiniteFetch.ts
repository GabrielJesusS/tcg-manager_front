import { TApplicationError } from "@/core/Errors";

export interface IInfiniteFetch<T> {
  data?: T[];
  size: number;
  setSize: (val: number | ((x: number) => number)) => void;
  mutate?: () => void;
  error?: TApplicationError;
  isValidating?: boolean;
  isLoading?: boolean;
}
