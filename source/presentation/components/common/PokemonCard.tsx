import Tilty from "react-tilty";
import CardBackplate from "@/presentation/public/images/rsc/mocks/card-back.png";
import classNames from "classnames";

interface PokemonCardProps {
  height?: number;
  width?: number;
  src?: string;
  className?: string;
}

export const PokemonCard = ({
  height,
  width,
  className,
  src,
}: PokemonCardProps) => {
  return (
    <Tilty>
      {src ? (
        <img
          className={className}
          width={width ?? 320}
          height={height ?? 444}
          src={src}
        ></img>
      ) : (
        <img
          className={className}
          width={width ?? 320}
          height={height ?? 444}
          src={CardBackplate.src}
        ></img>
      )}
    </Tilty>
  );
};
