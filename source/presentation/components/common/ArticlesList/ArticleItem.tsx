import Link from "next/link";
import { HTMLAttributes } from "react";

interface ArticleItemProps extends HTMLAttributes<HTMLDivElement> {
  articleId: string;
  articleTitle: string;
  articleAuthor: string;
  articleViews: number;
  articleLink: string;
  articleImage: string;
  articleDescription: string;
}

export const ArticleItem = ({
  articleTitle,
  articleAuthor,
  articleViews,
  articleLink,
  articleImage,
  articleDescription,
}: ArticleItemProps): JSX.Element => {
  return (
    <div className="md:flex items-center space-x-2 p-2 w-full">
      <Link className="shrink-0 block relative h-fit" href={articleLink}>
        <picture>
          <img
            src={articleImage}
            alt="pokemon article cover"
            width={112}
            height={74}
            className="w-full md:w-28 md:h-20 h-28 object-cover"
          />
        </picture>
        <small className="absolute text-system bottom-0 right-0 px-1 bg-system-800 rounded-sm">
          {articleViews > 1000 ? `${articleViews / 1000}k` : articleViews} Views
        </small>
      </Link>
      <div className="w-full grow-0 flex-shrink">
        <Link href={articleLink}>
          <h3 className="text-sm font-medium md:text-xl break-words">
            {articleTitle}
          </h3>
        </Link>
        <small className="text-xs md:text-base">
          Criado por{" "}
          <Link href={""} className="dft-link">
            {articleAuthor}
          </Link>
        </small>
        <p className="text-xs md:text-sm  text-system-400">
          {articleDescription}
        </p>
      </div>
    </div>
  );
};
