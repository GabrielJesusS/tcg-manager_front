import { ArticleItem } from "./ArticleItem";
import { useGetArticles } from "@/presentation/hooks/useGetArticles";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";
import { useNotify } from "@/presentation/hooks/useNotify";
import { useEffect, useMemo } from "react";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";
import { Button } from "../Button";
import Image from "next/image";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";
import Spinda from "@/presentation/public/images/rsc/spinda.webp";

export const ArticlesList = (): JSX.Element => {
  const filters = useRecoilValue(filterParamsAtom("articleList"));
  const { data, error, isLoading, setSize, size, isValidating } =
    useGetArticles(filters, OrderByEnum.NAME);

  const resetFilter = useResetRecoilState(filterParamsAtom("articleList"));
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
  console.log(itemsFounded)

  useEffect(() => {
    resetFilter();
  }, []);
  return (
    <div>
      <ul className="divide-y-4">
        {data?.map((articles) =>
          articles.data.map((article) => (
            <li key={article.id}>
              <ArticleItem
                author={article.user.name}
                id={article.id.toString()}
                description={article.description}
                title={article.title}
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
