import { ArticleItem } from "./ArticleItem";
import { useGetArticles } from "@/presentation/hooks/useGetArticles";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { useRecoilValue } from "recoil";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";
import Link from "next/link";
import { Button } from "../Button";
import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";

export const ArticleCollection = (): JSX.Element => {
  const filters = useRecoilValue(filterParamsAtom);
  const { data } = useGetArticles(filters, OrderByEnum.NAME);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-center font-bold">Nossos novos artigos!!!</h2>
      <ul className="space-y-2">
        {data?.map((articles) =>
          articles.data.map((article, index) =>
            index < 3 ? (
              <li key={article.id}>
                <ArticleItem
                  author={article.user.name}
                  id={article.id.toString()}
                  description={article.description}
                  title={article.title}
                />
              </li>
            ) : null
          )
        )}
      </ul>
      <Button full as={Link} href={PageRoutesEnum.ARTICLES}>
        Ver mais artigos...
      </Button>
    </div>
  );
};
