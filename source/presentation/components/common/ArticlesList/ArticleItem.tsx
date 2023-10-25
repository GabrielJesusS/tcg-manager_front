import { PageRoutesEnum } from "@/presentation/enums/PagesEnum";
import ArticleThumb from "@/presentation/public/images/rsc/article-thumb.webp"
import Link from "next/link";
import { HTMLAttributes } from "react";

interface ArticleItemProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  author: string;
  views?: number;
  thumb?: string;
  description: string;
}

export const ArticleItem = ({
  id,
  title,
  author,
  views,
  thumb,
  description,
}: ArticleItemProps): JSX.Element => {
  return (
    <div className="md:flex items-center space-x-2 p-2 w-full bg-system rounded-2xl shadow-sm border-system-200 border">
      <Link
        className="shrink-0 block relative h-fit"
        href={`${PageRoutesEnum.ARTICLES}${id}`}
      >
        <picture>
          <img
            src={thumb ?? ArticleThumb.src}
            alt="pokemon article cover"
            width={112}
            height={112}
            className="w-full md:w-28 aspect-video md:aspect-square object-cover rounded-xl"
          />
        </picture>
        {!views ? null : (
          <small className="absolute text-system bottom-0 right-0 px-1 bg-system-800 rounded-sm">
            {views > 1000 ? `${views / 1000}k` : views} Views
          </small>
        )}
      </Link>
      <div className="w-full grow-0 flex-shrink">
        <Link href={`${PageRoutesEnum.ARTICLES}${id}`}>
          <h3 className="text-sm font-medium line-clamp-2 md:text-xl break-words">
            {title}
          </h3>
        </Link>
        <small className="text-xs md:text-base">
          Criado por{" "}
          <Link href={""} className="dft-link">
            {author}
          </Link>
        </small>
        <p className="text-xs md:text-sm line-clamp-3  text-system-400">
          {description}
        </p>
      </div>
    </div>
  );
};
