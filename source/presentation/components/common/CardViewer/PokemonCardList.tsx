import { generateArray } from "@/presentation/utils/generateArray";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { PokemonCard } from "../PokemonCard";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import {
  filterParamsAtom,
  cardFilterOrderAtom,
} from "@/presentation/store/filters/cardFiltersAtom";
import { useGetCards } from "@/presentation/hooks/useGetCards";
import { Button } from "../Button";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";
import Image from "next/image";
import Spinda from "@/presentation/public/images/rsc/spinda.webp";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { useNotify } from "@/presentation/hooks/useNotify";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { useRouter } from "next/router";

const skeletonArray = generateArray(20);

export const PokemonCardList = (): JSX.Element => {
  const filters = useRecoilValue(filterParamsAtom("cardList"));
  const order = useRecoilValue(cardFilterOrderAtom);
  const resetFilter = useResetRecoilState(filterParamsAtom("cardList"));
  const [cardSet, setCardSet] = useState<string>("");
  const { notify } = useNotify();
  const { query, isReady } = useRouter();

  const { data, error, isValidating, setSize, size, isLoading, mutate } =
    useGetCards({ ...filters, "set.id": cardSet }, order);

  const itemsFounded = useMemo(() => {
    if (data) {
      return data[data.length - 1].totalCount;
    }
    return 0;
  }, [data]);

  useEffect(() => {
    if (isReady) {
      setCardSet(query.set as string);
      mutate();
    }
  }, [isReady]);


  useEffect(() => {
    if (error) {
      notify("Um erro ocorreu, por favor tente novamente!", StatusEnum.ERROR);
    }
  }, [error]);

  const reachedFinalList = useMemo(
    () => itemsFounded === data?.reduce((acc, e) => acc + e.data.length, 0),
    [data]
  );

  useEffect(() => {
    resetFilter();
  }, []);

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
