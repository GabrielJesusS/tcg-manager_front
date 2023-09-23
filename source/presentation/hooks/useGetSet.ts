import { createGetSetUseCase } from "@/factories/createGetSetUseCase";
import { IFetch } from "../@types/IFetch";
import { useFetch } from "./useFetch";

const getSetUsecase = createGetSetUseCase();

interface ISet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited?: string;
    expanded?: string;
    standard?: string;
  };
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

export function useGetSet(setId: string | null): IFetch<ISet> {
  const { data, error, mutate } = useFetch<ISet>({
    name: setId,
    useCase: async () => await getSetUsecase.execute(setId as string),
    shouldFetch: false,
    swr: {
      revalidateOnFocus: false,
    },
  });

  function update(cleanCache: boolean): void {
    if (cleanCache) {
      void mutate(undefined);
      return;
    }

    void mutate();
  }

  return {
    data,
    error,
    update,
    isLoading: !data && !error,
  };
}
