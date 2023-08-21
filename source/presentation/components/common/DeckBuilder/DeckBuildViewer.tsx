import { useRecoilValue } from "recoil";
import { ComposeCard } from "../DeckCardList/ComposeCard";
import { DeckInsertButton } from "../DeckInsertButton";
import {
  deckComposeIdsAtom,
  totalDeckCardsAtom,
} from "@/presentation/store/genericAtoms";

const MAX_DECK_CARDS = 60;

export const DeckBuildViewer = (): JSX.Element => {
  const deckComposeIds = useRecoilValue(deckComposeIdsAtom);
  const totalCards = useRecoilValue(totalDeckCardsAtom);

  return (
    <ol className="bg-system shadow-md rounded-2xl p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {deckComposeIds.map((card) => (
        <li key={card}>
          <ComposeCard cardId={card} />
        </li>
      ))}
      {totalCards < MAX_DECK_CARDS ? <DeckInsertButton /> : null}
    </ol>
  );
};
