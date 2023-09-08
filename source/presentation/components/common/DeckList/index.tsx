import { Deckitems } from "@/presentation/data/mocks/deckMocks";
import { Deckitem } from "./Deckitem";

export const DeckList = (): JSX.Element => {
  return (
    <div>
      <ol className="grid pokemon-card-list grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {Deckitems.map((item, index) => (
          <li
            style={{ "--animate-delay": index } as Record<string, unknown>}
            key={item.deckId}
          >
            <Deckitem {...item} />
          </li>
        ))}
      </ol>
    </div>
  );
};
