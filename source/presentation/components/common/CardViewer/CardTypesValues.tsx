import { PokemonTypeIcons } from "@/presentation/public/images/icons/types";
import { Fragment } from "react";

interface ICardTypesValues {
  label: string;
  types: Array<{
    type: string;
    value: string;
  }>;
}

export const CardTypesValues = ({
  label,
  types,
}: ICardTypesValues): JSX.Element => {
  return (
    <div className="space-y-1">
      <p>{label}</p>
      <div className="flex text-lg">
        {types.map((type) => (
          <Fragment key={type.type}>
            {PokemonTypeIcons[type.type]}
            <small className="leading-none">{type.value}</small>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
