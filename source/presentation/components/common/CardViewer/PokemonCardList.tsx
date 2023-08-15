import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { useFetch } from "@/presentation/hooks/useFetch";
import {
  listOffsetAtom,
  paginationAtom,
} from "@/presentation/store/paginations";
import { generateArray } from "@/presentation/utils/generateArray";
import { generateFilterString } from "@/presentation/utils/generateFilterString";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PokemonCard } from "../PokemonCard";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { PaginationBlock } from "../Pagination";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import { cardFilterAtom } from "@/presentation/store/filters/cardFiltersAtom";
import { useGetCards } from "@/presentation/hooks/useGetCards";
import { Button } from "../Button";

const skeletonArray = generateArray(20);

export const PokemonCardList = (): JSX.Element => {
  const filters = useRecoilValue(cardFilterAtom);

  const { data, mutate, isValidating, setSize, size } = useGetCards(filters);

  return (
    <div className="flex flex-col items-center space-y-6">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pokemon-card-list">
        {data
          ? data.map((cards) =>
              cards.data.map((card,index) => (
                <li key={card.id} style={{"--animate-delay": index} as Record<string,unknown>}>
                  <PokemonCard
                    url={`${PageRoutesEnum.CARDS + card.id}`}
                    src={card.images.small}
                  />
                </li>
              ))
            )
          : null}
      </ul>
      <Button
        onClick={() => {
          setSize(size + 1);
        }}
      >
        Carregar mais!
      </Button>
      {/*   {data && data.count === 0 && (
        <p className="text-center">
          Desculpe, não encontrei nada com este nome =(
        </p>
      )} */}
    </div>
  );
};
