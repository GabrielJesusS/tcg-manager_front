import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Loading } from "../components/common/Loading";
import { useGetDeck } from "../hooks/useGetDeck";

export function checkDeckExists(Component: FC): FC {
  const comp: FC = (): JSX.Element => {
    const {
      query: { id },
      isReady,
    } = useRouter();

    const [deckId, setDeckId] = useState<string | null>(null);

    const { data, error, isLoading } = useGetDeck(deckId);

    useEffect(() => {
      if (isReady && id) {
        const deck = id;
        setDeckId(deck as string);
      }
    }, [isReady]);

    if (!isLoading) {
      if (data) {
        return <Component />;
      }

      if (error) {
        return <></>;
      }
    }

    return (
      <>
        <Loading />
      </>
    );
  };

  return comp;
}
