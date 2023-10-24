import { deckTutorialAtom } from "@/presentation/store/deckAtoms";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ShepherdTourContext } from "react-shepherd";
import { useRecoilValue } from "recoil";

export const DeckTourButton = (): JSX.Element => {
  const tour = useContext(ShepherdTourContext);
  const hasSawTheTutorial = useRecoilValue(deckTutorialAtom);
  const router = useRouter();

  useEffect(() => {
    if (hasSawTheTutorial || !tour || tour.isActive()) return;
    tour.start();
  }, [hasSawTheTutorial]);

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        if (tour?.isActive()) {
          tour.cancel();
        }
      }
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, []);

  return <></>;
};
