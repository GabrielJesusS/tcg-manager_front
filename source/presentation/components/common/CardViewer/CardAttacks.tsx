import { IconComponent } from "@/presentation/public/images/icons/types";
import { generateRandomId } from "@/utils/generateRandomId";
import { Fragment } from "react";

interface ICardAttacksProps {
  name: string;
  cost: string[];
  damage: string;
  text: string;
}

export const CardAttacks = ({
  name,
  cost,
  damage,
  text,
}: ICardAttacksProps): JSX.Element => {
  return (
    <>
      <p className="text-base flex w-full justify-between sm:text-lg font-semibold">
        <span className="flex w-full items-center space-x-6">
          <span>{name}: </span>
          <span className="flex space-x-1">
            {cost.map((cost) => (
              <Fragment key={generateRandomId()}>
                <IconComponent name={cost} />
              </Fragment>
            ))}
          </span>
        </span>
        <span>{damage}</span>
      </p>
      <p>{text}</p>
    </>
  );
};
