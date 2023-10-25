import Link from "next/link";
import { HTMLAttributes } from "react";
import { ArticleItem } from "./ArticleItem";
import { useGetArticles } from "@/presentation/hooks/useGetArticles";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { useRecoilValue } from "recoil";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";

interface ArticlesListProps extends HTMLAttributes<HTMLDivElement> {
  topicTitle: string;
  articles?: Article[];
}

interface Article {
  articleId: string;
  articleTitle: string;
  articleAuthor: string;
articleViews: number;
  articleLink: string;
  articleImage: string;
  articleDescription: string;
}

export const ArticlesList = (): JSX.Element => {
  const filters = useRecoilValue(filterParamsAtom);
  const { data } = useGetArticles(filters, OrderByEnum.NAME);

  console.log(data);

  return (
    <ul className="divide-y">
      {data?.map((articles) =>
        articles.data.map((article) => (
          <li key={article.id}>
            <ArticleItem
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
