import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { useFetch } from "@/presentation/hooks/useFetch";
import {
  cardListOffsetAtom,
  cardPaginationAtom,
} from "@/presentation/store/paginations";
import { generateArray } from "@/presentation/utils/generateArray";
import { generateFilterString } from "@/presentation/utils/generateFilterString";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { PokemonCard } from "../PokemonCard";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { PaginationBlock } from "../Pagination";

interface IPokemonCardListProps {
  filters?: Record<string, string>;
}

export const PokemonCardList = ({ filters }: IPokemonCardListProps) => {
  const getCardListUsecase = createGetCardListUsecase();
  const skeletonArray = generateArray(20);
  const [page, setPage] = useRecoilState(cardPaginationAtom);
  const [offsetPage, setOffsetPage] = useRecoilState(cardListOffsetAtom);

  const { data, mutate, error, isValidating } = useFetch({
    name: "pokemonCardList",
    useCase: async () =>
      await getCardListUsecase.execute({
        page: offsetPage,
        searchParams: filters ? generateFilterString(filters) : "",
      }),
    swr: {
      revalidateOnFocus: false,
    },
  });

  useEffect(() => {
    if (data) {
      setPage({ ...data });
    }
  }, [data]);

  useEffect(() => {
    mutate();
  }, [offsetPage, filters]);

  return (

      <div className="flex flex-col items-center space-y-6">
        {data && <>
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
          {data &&
            data.count > 0 &&
            !isValidating &&
            data.data.map((card) => (
              <li key={card.id}>
                <PokemonCard url={`cards/${card.id}`} src={card.images.small} />
              </li>
            ))}
          {isValidating &&
            skeletonArray.map((item) => <CardSkeleton key={item} />)}
        </ul>
        {data && data.count > 0 && <PaginationBlock />}
        {data && data.count === 0 && (
          <p className="text-center">
            Desculpe, não encontrei nada com este nome =(
          </p>
        )}</>}
      </div>
  );
};
