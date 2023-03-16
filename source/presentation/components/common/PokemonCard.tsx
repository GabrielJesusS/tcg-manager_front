import Tilty from "react-tilty";
import CardBackplate from "@/presentation/public/images/rsc/mocks/card-back.png";
import classNames from "classnames";
import Link from "next/link";

interface PokemonCardProps {
  height?: number;
  width?: number;
  src?: string;
  className?: string;
  url?: string;
}

export const PokemonCard = ({
  height,
  width,
  className,
  src,
  url
}: PokemonCardProps) => {
  return (
    <Tilty>
      <Link href={url ?? ""}>
      {src ? (
        <img
          className={className}
          width={width ?? 320}
          height={height ?? 444}
          src={src}
          loading="lazy"
        ></img>
      ) : (
        <img
          className={className}
          width={width ?? 320}
          height={height ?? 444}
          src={CardBackplate.src}
          loading="lazy"
        ></img>
      )}
      </Link>
    </Tilty>
  );
};
