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
      <CardWrapper url={decorative ? undefined : url}>
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
          priority
        />
      </CardWrapper>
    </Tilty>
  );
};

const CardWrapper = ({
  url,
  children,
}: {
  url?: string;
  children: React.ReactNode;
}): JSX.Element => {
  if (url) {
    return <Link href={url}>{children}</Link>;
  }

  return <div>{children}</div>;
};
