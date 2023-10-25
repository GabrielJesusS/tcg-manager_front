import { ArticleItem } from "./ArticleItem";
import { useGetArticles } from "@/presentation/hooks/useGetArticles";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { useRecoilValue } from "recoil";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";


export const ArticlesList = (): JSX.Element => {
  const filters = useRecoilValue(filterParamsAtom);
  const { data } = useGetArticles(filters, OrderByEnum.NAME);

  return (
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
  );
};
