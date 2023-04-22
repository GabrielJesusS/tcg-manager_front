import { PAGE_ROUTES } from "@/presentation/enums/PagesEnum";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface Setitem extends HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  releaseDate: string;
  legalities?: ILegalities;
  image: string;
  icon: string;
}

interface ILegalities {
  unlimited?: string;
  standard?: string;
  expanded?: string;
}

export const Setitem = ({
  id,
  title,
  releaseDate,
  legalities,
  image,
  icon,
}: Setitem) => {
  return (
    <Link
      href={`${PAGE_ROUTES.SETS}${id}`}
      className="bg-system rounded-2xl p-3 shadow-xl h-full block"
    >
      <span className="space-y-3 block">
        <picture className="block">
          <img
            width={40}
            height={40}
            className="h-6  mx-auto object-contain aspect-square"
            src={icon}
            alt="pokemon tcg set icon"
          />
        </picture>
        <picture className="block">
          <img
            width={572}
            height={112}
            className="h-16 object-contain mx-auto"
            src={image}
            alt="pokemon tcg set image"
          />
        </picture>
      </span>
      <span className="text-center text-system-800 space-y-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xs text-system-400">Lançado em {releaseDate}</p>
        <ul className="text-xs list-disc text-center">
          {legalities?.standard && (
            <li className="w-fit mx-auto">Standard {legalities?.standard}</li>
          )}
          {legalities?.expanded && (
            <li className="w-fit mx-auto">Expanded {legalities.expanded}</li>
          )}
          {legalities?.unlimited && (
            <li className="w-fit mx-auto">Unlimited {legalities.unlimited}</li>
          )}
        </ul>
      </span>
    </Link>
  );
};
