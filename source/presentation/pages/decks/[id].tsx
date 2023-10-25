import { DeckCardView } from "@/presentation/components/common/DeckCardView";
import { DeckHeader } from "@/presentation/components/common/DeckHeader";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { useGetDeck } from "@/presentation/hooks/useGetDeck";
import { checkDeckExists } from "@/presentation/middlewares/checkDeckExists";
import { parseDeckCards } from "@/utils/parseDeckCards";
import { useRouter } from "next/router";
import { useMemo } from "react";
import BG from "@/presentation/public/images/rsc/bgs/header.webp"

function Deck(): JSX.Element {
  const { query } = useRouter();

  const { data } = useGetDeck(query.id as string);

  const parsedDeckCards = useMemo(() => {
    if (data) {
      return parseDeckCards(data?.cards);
    }
    return [];
  }, [data]);

  return (
    <DefaultLayout>
      <DeckHeader thumbnail={BG.src} title={data?.name ?? "Deck"}/>
      <div className="p-safe grow bg-system-100 space-y-4">
        <small className="text-center block">{data?.description}</small>
        <h2 className="text-2xl font-bold ">Cartas</h2>
        <div className="bg-system w-full drop-shadow-md rounded-2xl p-safe">
          <ul className="grid sm:grid-cols-2 gap-4 md:gap-0 md:block md:divide-y-2 md:space-y-2 ">
            {parsedDeckCards.map((card) => (
              <li key={card.id} className="pt-2">
                <DeckCardView {...card} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default checkDeckExists(Deck);
