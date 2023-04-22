import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { useFetch } from "@/presentation/hooks/useFetch";
import { listOffsetAtom, paginationAtom } from "@/presentation/store/paginations";
import { generateArray } from "@/presentation/utils/generateArray";
import { generateFilterString } from "@/presentation/utils/generateFilterString";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PokemonCard } from "../PokemonCard";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { PaginationBlock } from "../Pagination";
import { PAGE_ROUTES } from "@/presentation/enums/PagesEnum";
import { cardFilterAtom } from "@/presentation/store/filters/cardFiltersAtom";


const getCardListUsecase = createGetCardListUsecase();
const skeletonArray = generateArray(20);

export const PokemonCardList = () => {
 

  const [page, setPage] = useRecoilState(paginationAtom);
  const [offsetPage, setOffsetPage] = useRecoilState(listOffsetAtom);
  const filters = useRecoilValue(cardFilterAtom)

  console.log(generateFilterString(filters))

  const { data, mutate, error, isValidating } = useFetch({
    name: "pokemonCardList",
    useCase: async () =>
      await getCardListUsecase.execute({
        page: offsetPage,
        searchParams:  generateFilterString(filters),
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
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {data &&
          data.count > 0 &&
          !isValidating &&
          data.data.map((card) => (
            <li key={card.id}>
              <PokemonCard url={`${PAGE_ROUTES.CARDS + card.id}`} src={card.images.small} />
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
      )}
    </div>
  );
};
