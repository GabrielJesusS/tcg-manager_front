import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import useSWR, { SWRConfiguration, SWRResponse } from "swr";

interface IUseFetchParams<T> {
  name: string | null;
  useCase: () => Promise<TEither<TApplicationError, T>>;
  shouldFetch?: boolean;
  shouldHandleError?: boolean;
  swr?: SWRConfiguration;
}

export function useFetch<Data = any>({
  name,
  useCase,
  shouldFetch = true,
  shouldHandleError = true,
  swr,
}: IUseFetchParams<Data>): SWRResponse<Data, TApplicationError> {
  return useSWR(
    shouldFetch ? name : null,

    async () => {
      const response = await useCase();

      if (response.isRight()) {
        return response.value;
      }

      throw response.value as Error;
    },
    {
      dedupingInterval: 5000,
      ...(swr ?? {}),
    }
  );
}
