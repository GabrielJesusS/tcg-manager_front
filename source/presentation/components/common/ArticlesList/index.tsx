import Link from "next/link";
import { HTMLAttributes } from "react";
import { ArticleItem } from "./ArticleItem";

interface ArticlesListProps extends HTMLAttributes<HTMLDivElement> {
  topicTitle: string;
  articles?: Array<Article>;
}

interface Article {
    articleId:string
  articleTitle: string;
  articleAuthor: string;
  articleViews: number;
  articleLink: string;
  articleImage: string;
  articleDescription: string;
}

export const ArticlesList = ({ topicTitle, articles }: ArticlesListProps) => {
  return (
    <div className="rounded overflow-hidden">
      <div className=" text-center w-full bg-system-800 text-system px-2 py-3 text-xs md:text-base">
        <span>{topicTitle}</span>
      </div>
      <ul className="divide-y">
      {articles?.map((article) => (
        <li key={article.articleId}><ArticleItem {...article} /></li>
      ))}
      </ul>
      <div className=" text-center w-full bg-system-800 text-system px-2 py-3 text-xs md:text-base"><Link href={""}>Ver mais...</Link></div>
    </div>
  );
};
