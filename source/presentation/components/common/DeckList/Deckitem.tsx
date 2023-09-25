import Link from "next/link";
import { HTMLAttributes } from "react";

interface DeckitemProps extends HTMLAttributes<HTMLDivElement> {
  deckId: string;
  deckTitle: string;
  deckAuthor: {
    authorName: string;
    authorId: string;
  };
  deckRate: number;
  deckDifficulty: number;
  deckDescription: string;
}

export const Deckitem = ({
  deckId,
  deckTitle,
  deckAuthor,
  deckRate,
  deckDifficulty,
  deckDescription,
}: DeckitemProps): JSX.Element => {
  return (
    <div title={deckTitle} className="rounded-2xl overflow-hidden shadow-lg ">
      <Link href={`decks/${deckId}`}>
        <div className="h-20 bg-gradient-to-t from-system-800">
          <picture>
            <img
              className="object-cover w-full h-full object-[0,20%] mix-blend-overlay"
              src="https://images.pokemontcg.io/pl3/1.png"
              alt="pokemon deck cover"
            />
          </picture>
        </div>
      </Link>
      <div className="text-system-800 bg-system p-2">
        <Link href={`decks/${deckId}`}>
          <h3 className="text-sm font-bold break-words line-clamp-2  md:text-xl">
            {deckTitle}
          </h3>
        </Link>
        <small className="text-xs md:text-sm">
          Criado por 
          <Link className="dft-link" href={`usuarios/${deckAuthor.authorId}`}>
            {deckAuthor.authorName}
          </Link>
        </small>
        <p className="text-system-400 text-sm line-clamp-3 max-md:hidden">
          {deckDescription}
        </p>
        <p className="text-xs md:text-sm flex">
          Dificuldade: {deckDifficulty.toFixed(1)}
        </p>
      </div>
    </div>
  );
};
