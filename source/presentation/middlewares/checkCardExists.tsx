import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { IPokemonCard } from "../@types/IPokemonCard";
import { Loading } from "../components/common/Loading";
import { useGetCard } from "../hooks/useGetCard";
import { pokemonCardIdAtom } from "../store/cardAtom";

export function checkCardExists(Component: FC): FC {
  const comp: FC = (): JSX.Element => {
    const {
      replace,
      query: { cardId },
    } = useRouter();

    const [actualCard, setActualCard] = useState<string | null>(null);
    const setCard = useSetRecoilState(pokemonCardIdAtom);
    const { data, error, isLoading } = useGetCard(actualCard);

    useEffect(() => {
      if (cardId === undefined) {
        setActualCard(null);
      }

      if (typeof cardId === "string") {
        setActualCard(cardId);
        setCard(cardId);
      }
    }, [cardId]);

    if (!isLoading) {
      if (data) {
        return <Component />;
      }

      if (error) {
        return <></>;
      }
    }

    return <><Loading/></>;
  };

  return comp;
}

