import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IPokemonCard } from "../@types/IPokemonCard";
import { useGetCard } from "../hooks/useGetCard";

export function checkCardExists(): IPokemonCard | null {
  const {
    replace,
    query: { cardId },
  } = useRouter();

  const [actualCard, setActualCard] = useState<string | null>(null);

  useEffect(() => {
    if (cardId === undefined) {
      setActualCard(null);
    }

    if (typeof cardId === "string") {
      setActualCard(cardId);
    }
  }, [cardId]);

  const { data, error, isLoading } = useGetCard(actualCard);

  if (data) {
    return data;
  }

  return null;
}
