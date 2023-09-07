import { TApplicationError } from "@/core/Errors";

export interface IFetch<T> {
  data: T | undefined;
  error: TApplicationError | undefined;
  update: (clean: boolean) => void;
  isLoading: boolean;
}
