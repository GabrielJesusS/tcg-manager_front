import { HTMLAttributes } from "react";

interface Setitem extends HTMLAttributes<HTMLDivElement> {
  setId: string;
  setTitle: string;
  releaseDate: string;
  legalities?: ILegalities;
  setImage: string;
  setIcon: string;
}

interface ILegalities {
  unlimited?: string;
  standard?: string;
  expanded?: string;
}

export const Setitem = ({
  setTitle,
  releaseDate,
  legalities,
  setImage,
  setIcon,
}: Setitem) => {
  return (
    <div className="bg-system rounded-2xl p-3 shadow-xl">
      <div>
        <picture>
          <img width={40} height={40} className="w-6 mx-auto" src={setIcon} alt="pokemon tcg set icon" />
        </picture>
        <picture>
          <img width={572} height={112} className="w-28 mx-auto" src={setImage} alt="pokemon tcg set image" />
        </picture>
      </div>
      <div className="text-center text-system-800">
        <h3 className="text-lg font-bold">{setTitle}</h3>
        <p className="text-xs text-system-400">Lançado em {releaseDate}</p>
        <ul className="text-xs">
          {legalities?.standard && <li>Standard {legalities?.standard}</li>}
          {legalities?.expanded && <li>Expanded {legalities.expanded}</li>}
          {legalities?.unlimited && <li>Unlimited {legalities.unlimited}</li>}
        </ul>
      </div>
    </div>
  );
};
