import { PokemonTypeIcons } from "@/presentation/public/images/icons/types";
import { generateRandomId } from "@/utils/generateRandomId";
import { Fragment } from "react";

interface ICardTypesProps {
  label: string;
  types: string[];
}

export const CardTypes = ({ label, types }: ICardTypesProps): JSX.Element => {
  return (
    <div className="space-y-1">
      <p>{label}</p>
      <div className="text-lg flex space-x-1">
        {types.map((type) => (
          <Fragment key={generateRandomId()}>{PokemonTypeIcons[type]}</Fragment>
        ))}
      </div>
    </div>
  );
};
