import { useRecoilCallback, useRecoilValue } from "recoil";
import { ComposeCard } from "../DeckCardList/ComposeCard";
import { DeckInsertButton } from "../DeckInsertButton";
import {
  deckComposeAtom,
  deckComposeIdsAtom,
} from "@/presentation/store/genericAtoms";
import { useEffect } from "react";
import { normalizeString } from "@/presentation/utils/normalizeString";

export const DeckBuildViewer = (): JSX.Element => {
  const deckComposeIds = useRecoilValue(deckComposeIdsAtom);

  const getStatistics = useRecoilCallback(({ snapshot, set }) => async () => {
    const x = await snapshot.getPromise(deckComposeIdsAtom);
    const y = await x.reduce(async (total, cards) => {
      const acc = await total;
      const cardsOnCompose = await snapshot.getPromise(deckComposeAtom(cards));
      console.log(cardsOnCompose);

      const key: string = normalizeString(cardsOnCompose.supertype);

      return {
        ...acc,
        [key]: acc[key] + cardsOnCompose.quantity,
      };
    }, Promise.resolve({ total: 0, pokemon: 0, energy: 0, trainer: 0 }));
    console.log(y);
  },[deckComposeIds]);

  return (
    <ol className="bg-system shadow-md rounded-2xl p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {deckComposeIds.map((card) => (
        <li key={card}>
          <ComposeCard cardId={card} />
        </li>
      ))}
      <DeckInsertButton />
    </ol>
  );
};
