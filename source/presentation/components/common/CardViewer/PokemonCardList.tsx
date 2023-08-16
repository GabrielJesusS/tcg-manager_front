import { generateArray } from "@/presentation/utils/generateArray";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { PokemonCard } from "../PokemonCard";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import { cardFilterAtom, cardFilterOrderAtom } from "@/presentation/store/filters/cardFiltersAtom";
import { useGetCards } from "@/presentation/hooks/useGetCards";
import { Button } from "../Button";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";
import Image from "next/image";
import Spinda from "@/presentation/public/images/rsc/spinda.webp";
import { CardSkeleton } from "../skeletons/CardSkeleton";

const skeletonArray = generateArray(20);

export const PokemonCardList = (): JSX.Element => {
  const filters = useRecoilValue(cardFilterAtom);
  const order = useRecoilValue(cardFilterOrderAtom);

  const { data, isValidating, setSize, size, isLoading } = useGetCards(filters, order);

  const itemsFounded = useMemo(
    () => data?.findLast((e) => e)?.totalCount,
    [data]
  );

  const reachedFinalList = useMemo(
    () => itemsFounded === data?.reduce((acc, e) => acc + e.data.length, 0),
    [data]
  );

  console.log(reachedFinalList, isValidating);

  return (
    <div className="flex flex-col items-center space-y-6">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pokemon-card-list">
        {isLoading ? skeletonArray.map((e) => <CardSkeleton key={e} />) : null}
        {data?.map((cards) =>
          cards.data.map((card, index) => (
            <li
              key={card.id}
              style={{ "--animate-delay": index } as Record<string, unknown>}
            >
              <PokemonCard
                url={`${PageRoutesEnum.CARDS + card.id}`}
                src={card.images.small}
              />
            </li>
          ))
        )}
      </ul>
      {!reachedFinalList && !isValidating ? (
        <Button
          onClick={() => {
            setSize(size + 1);
          }}
        >
          Carregar mais!
        </Button>
      ) : null}
      {isValidating && !isLoading ? (
        <LoadingIcon className="fill-primary h-10 spin"></LoadingIcon>
      ) : null}
      {!itemsFounded && !isValidating ? (
        <p className="text-center font-bold text-2xl">
          <Image
            src={Spinda.src}
            width={200}
            height={200}
            alt="Imagem do spinda."
            className="mx-auto animate-bounce"
          />
          Desculpe, não encontrei nada com este nome =(
        </p>
      ) : null}
    </div>
  );
};
