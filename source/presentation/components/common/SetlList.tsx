import { useGetSets } from "@/presentation/hooks/useGetSets";
import { Setitem } from "./Setitem";
import { useEffect, useMemo } from "react";
import { generateArray } from "@/presentation/utils/generateArray";
import { SetSkeleton } from "./skeletons/SetSkeleton";
import { useNotify } from "@/presentation/hooks/useNotify";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";
import Image from "next/image";
import Spinda from "@/presentation/public/images/rsc/spinda.webp";
import { Button } from "./Button";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";

const skeletonArray = generateArray(20);

export const SetList = (): JSX.Element => {
  const { data, isLoading, error, isValidating, setSize, size } = useGetSets();
  const { notify } = useNotify();

  const itemsFounded = useMemo(() => {
    if (data) {
      return data[data.length - 1].totalCount;
    }
    return 0;
  }, [data]);

  const reachedFinalList = useMemo(
    () => itemsFounded === data?.reduce((acc, e) => acc + e.data.length, 0),
    [data]
  );

  useEffect(() => {
    if (error) {
      notify("Um erro ocorreu, por favor tente novamente!", StatusEnum.ERROR);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
        {data &&
          !isLoading &&
          data.map((sets) =>
            sets.data.map((set) => (
              <li key={set.id}>
                <Setitem
                  id={set.id}
                  title={set.name}
                  releaseDate={set.releaseDate}
                  legalities={set.legalities}
                  icon={set.images.symbol}
                  image={set.images.logo}
                />
              </li>
            ))
          )}
        {isLoading && skeletonArray.map((item) => <SetSkeleton key={item} />)}
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
