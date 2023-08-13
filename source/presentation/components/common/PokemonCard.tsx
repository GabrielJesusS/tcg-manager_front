import Tilty from "react-tilty";
import CardBackplate from "@/presentation/public/images/rsc/mocks/card-back.png";
import classNames from "classnames";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import Image from "next/image";

interface PokemonCardProps {
  decorative?: boolean;
  animate?: boolean;
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
  url,
  decorative,
  animate,
}: PokemonCardProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  function handleImageLoad(e: SyntheticEvent<HTMLImageElement>): void {
    if (e.currentTarget.src.includes("pokemontcg")) {
      setImageLoaded(true);
    }
  }

  return (
    <Tilty className="w-fit">
      <Link href={!url || decorative ? "" : url} aria-disabled={decorative}>
        <Image
          src={src ?? CardBackplate.src}
          alt=""
          onLoad={handleImageLoad}
          width={width ?? 320}
          height={height ?? 444}
          className={classNames(
            "select-none pointer-events-none",
            { "flip-card": animate && imageLoaded },
            className
          )}
          loading="lazy"
        />
      </Link>
    </Tilty>
  );
};
