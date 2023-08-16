import { createGetSubtypesListUsecase } from "@/factories/createGetSubtypesUseCase";
import { IFetch } from "../@types/IFetch";
import { useFetch } from "./useFetch";

interface IGetSubtypesData {
  data: string[];
}

const getSubtypesList = createGetSubtypesListUsecase();

export const useGetSubtypes = (): IFetch<IGetSubtypesData> => {
  const { data, error, mutate } = useFetch({
    name: "SubtypesList",
    useCase: async () => await getSubtypesList.execute(),
  });

  function update(): void {
    void mutate();
  }

  return {
    data,
    error,
    isLoading: !data && !error,
    update,
  };
};
