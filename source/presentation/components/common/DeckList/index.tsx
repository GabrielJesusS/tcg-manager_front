import { Deckitem } from "./Deckitem";
import { useGetDecks } from "@/presentation/hooks/useGetDecks";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { useEffect, useMemo } from "react";
import { useNotify } from "@/presentation/hooks/useNotify";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { Button } from "../Button";
import Image from "next/image";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";
import Spinda from "@/presentation/public/images/rsc/spinda.webp";

export const DeckList = (): JSX.Element => {
  const filters = useRecoilValue(filterParamsAtom);
  const { data, error, setSize, size, isLoading, isValidating } = useGetDecks(
    filters,
    OrderByEnum.NAME
  );
  const resetFilter = useResetRecoilState(filterParamsAtom);
  const { notify } = useNotify();

  const itemsFounded = useMemo(() => {
    if (data) {
      return data[data.length - 1].totalCount;
    }
    return 0;
  }, [data]);

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
    <div>
      <ol className="grid pokemon-card-list grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {data?.map((decks) =>
          decks.data.map((item, index) => (
            <li
              style={{ "--animate-delay": index } as Record<string, unknown>}
              key={item.id}
            >
              <Deckitem
                deckDifficulty={item.difficulty}
                deckAuthor={{
                  authorId: item.user.id,
                  authorName: item.user.user_name,
                }}
                deckDescription={item.description}
                deckTitle={item.name}
                deckId={item.id}
                deckRate={item.difficulty}
              />
            </li>
          ))
        )}
      </ol>
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
