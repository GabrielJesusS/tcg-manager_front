import { TEither } from "@/core/Either";
import { TApplicationError } from "@/core/Errors";
import useSWRInfinite, {
  SWRInfiniteConfiguration,
  SWRInfiniteResponse,
  SWRInfiniteKeyLoader,
  SWRInfiniteFetcher,
} from "swr/infinite";

interface IUseFetchParams {
  getKey: SWRInfiniteKeyLoader;
  useCase: SWRInfiniteFetcher;
  swr?: SWRInfiniteConfiguration;
}

export function useInfinite<Data = any>({
  getKey,
  useCase,
  swr,
}: IUseFetchParams): SWRInfiniteResponse<Data, TApplicationError> {
  return useSWRInfinite(
    getKey,
    async (c) => {
      const response = await useCase(c);

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
